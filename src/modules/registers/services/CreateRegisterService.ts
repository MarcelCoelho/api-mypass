import { injectable, inject } from 'tsyringe';
import { uuid } from 'uuidv4';

//import AppError from '@shared/errors/AppError';
import IRegisterRepository from '../repositories/IRegisterRepository';
import ICryptoProvider from '../../registers/providers/CryptoProvider/models/ICryptoProvider';
import {IRegisterData} from '../../registers/dtos/IRegister';
import UrlPhotoDefault from '../../../utils/constantes';

interface IRequest {
  name: string;
  description: string;
  url: string;
  url_photo: string;
  user: string;
  password: string;
  user_id: string;
}

@injectable()
class CreateRegisterService {
  constructor(
    @inject('RegistersRepository')
    private registersRepository: IRegisterRepository,

    @inject('CryptoProvider')
    private cryptoProvider: ICryptoProvider,
  ) { }

  public async execute({ name, description, url, url_photo, user, password, user_id }: IRequest): Promise<IRegisterData> {

    if (!password) {
      throw new Error('Password is empty.');
    }

    const checkRegister = await this.registersRepository.findByName(name);

    if (checkRegister && checkRegister.user_id === user_id) {
      throw new Error('Register already used with this name.');
    }

    const passwordCrypted = await this.cryptoProvider.encrypt(user_id, password);

    if (!url_photo) {
      url_photo = UrlPhotoDefault();
    }

    const date = new Date();

    const registerData: IRegisterData = {
      id: uuid(),
      name,
      description,
      url,
      user,
      password: passwordCrypted,
      user_id,
      url_photo,
      created_at: date,
      updated_at: date,
    }

    await this.registersRepository.create(registerData);

    return registerData;
  }
}

export default CreateRegisterService;
