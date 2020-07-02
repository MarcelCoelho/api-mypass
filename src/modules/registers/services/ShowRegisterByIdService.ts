import { injectable, inject } from 'tsyringe';

import IRegisterRepository from '../repositories/IRegisterRepository';
import ICryptoProvider from '@modules/registers/providers/CryptoProvider/models/ICryptoProvider';
import IRegister from '@modules/registers/dtos/IRegister';

interface IRequest {
  id: string;
}

@injectable()
class ShowRegisterByIdService {
  constructor(
    @inject('RegistersRepository')
    private registersRepository: IRegisterRepository,

    @inject('CryptoProvider')
    private cryptoProvider: ICryptoProvider,
  ) { }

  public async execute({ id }: IRequest): Promise<IRegister | null> {
    const register = await this.registersRepository.findById(id);
    if (register) {
        this.cryptoProvider.decrypt(register.user_id, register.password).then(response => {
          register.password = response;
      });
    }
    return register;
  }
}

export default ShowRegisterByIdService;
