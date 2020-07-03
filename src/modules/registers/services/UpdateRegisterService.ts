import { injectable, inject } from 'tsyringe';

//import AppError from '@shared/errors/AppError';
import IRegisterRepository from '../repositories/IRegisterRepository';
import ICryptoProvider from '../../registers/providers/CryptoProvider/models/ICryptoProvider';
import {IRegisterData} from '../../registers/dtos/IRegister';

interface IRequest {
  id: string;
  name: string;
  description: string;
  url: string;
  url_photo: string;
  user: string;
  password: string;
  user_id: string;
}

@injectable()
class UpdateRegisterService {
  constructor(
    @inject('RegistersRepository')
    private registersRepository: IRegisterRepository,

    @inject('CryptoProvider')
    private cryptoProvider: ICryptoProvider,
  ) { }

  public async execute({ id, name, description, url, url_photo, user, password, user_id }: IRequest): Promise<IRegisterData> {

    if (!password) {
      throw new Error('Password is empty.');
    }

    const register = await this.registersRepository.findById(id);

    if (!register) {
      throw new Error('Register not found.');
    }

    const passwordCrypted = await this.cryptoProvider.encrypt(user_id, password);
    register.name = name;
    register.description = description;
    register.url = url;
    register.url_photo = url_photo;
    register.user = user;
    register.password = passwordCrypted;

    await this.registersRepository.create(register);

    return register;
  }
}

export default UpdateRegisterService;
