import { inject, injectable } from "tsyringe";
import { deleteFile } from "@utils/file";
import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository";

interface IRequest {
  id: string;
  avatar: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({ id, avatar }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
