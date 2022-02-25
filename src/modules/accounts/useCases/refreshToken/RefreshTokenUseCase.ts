import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokenRepository";

interface IPayload {
  sub: string;
  email: string;
}

interface ITokenResponse {
  token: string;
  refresh_token: string;
}

@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: DayjsDateProvider
  ) {}

  async execute(token: string): Promise<ITokenResponse> {
    const {
      secret_refresh_token,
      expires_refresh_token_days,
      expires_in_refresh_token,
      secret_token,
      expires_in_token,
    } = process.env;

    const { email, sub } = verify(token, secret_refresh_token) as IPayload;

    const user_id = sub;

    const userToken =
      await this.usersTokensRepository.findByUserIdAndRefreshToken(
        user_id,
        token
      );

    if (!userToken) {
      throw new AppError("Refresh Token doesn't exists");
    }

    await this.usersTokensRepository.deleteById(userToken.id);

    const expires_date = this.dateProvider.addDays(
      parseInt(expires_refresh_token_days, 10)
    );

    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: sub,
      expiresIn: expires_in_refresh_token,
    });

    await this.usersTokensRepository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    const newToken = sign({}, secret_token, {
      subject: user_id,
      expiresIn: expires_in_token,
    });

    return { refresh_token, token: newToken };
  }
}

export { RefreshTokenUseCase };
