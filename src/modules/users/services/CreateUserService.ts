import { injectable, inject } from 'tsyringe';
import { uuid } from 'uuidv4';

import IUser from '@modules/users/dtos/IUser';
import AppError from '@shared/errors/AppError';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import IUserRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  url_photo: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) { }

  public async execute({ name, email, password, url_photo }: IRequest): Promise<IUser> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    if (!url_photo) {
      url_photo = "https://i7.pngguru.com/preview/384/706/535/computer-icons-user-login-gender.jpg";
    }

    const date = new Date();

    const userData: IUser = {
      id: uuid(),
      name,
      email,
      password: hashedPassword,
      url_photo,
      created_at: date,
      updated_at: date,
    }

    await this.usersRepository.create(userData);

    return userData;
  }
}

export default CreateUserService;
