import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
  id: string;
  avatar: string;
}

// Adicionar coluna avatar na tabela de users
// Refatorar usuário com coluna avatar
// Configuração upload multer
// Criar regra de negócio do upload
// Criar controller

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({ id, avatar }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    user.avatar = avatar;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
