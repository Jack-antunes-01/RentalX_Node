import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let dateProvider: DayjsDateProvider;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Password Mail Use Case", () => {
  beforeEach(() => {
    dateProvider = new DayjsDateProvider();
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    usersRepositoryInMemory.create({
      driver_license: "qylKD3c",
      email: "afiho@ci.de",
      name: "Josie Wolfe",
      password: "3sk5J32zCMfW894XAW",
    });

    await sendForgotPasswordMailUseCase.execute("afiho@ci.de");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user doesn't exist", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("afiho@ci.de")
    ).rejects.toEqual(new AppError("User doesn't exists"));
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create"
    );

    usersRepositoryInMemory.create({
      driver_license: "qylKD3c",
      email: "afiho@ci.de",
      name: "Josie Wolfe",
      password: "3sk5J32zCMfW894XAW",
    });

    await sendForgotPasswordMailUseCase.execute("afiho@ci.de");

    expect(generateTokenMail).toHaveBeenCalled();
  });
});
