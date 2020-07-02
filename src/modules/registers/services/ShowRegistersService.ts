import { injectable, inject } from 'tsyringe';

import IRegisterRepository from '../repositories/IRegisterRepository';
import ICryptoProvider from '@modules/registers/providers/CryptoProvider/models/ICryptoProvider';
import {IRegisterData} from '@modules/registers/dtos/IRegister';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowRegistersService {
  constructor(
    @inject('RegistersRepository')
    private registersRepository: IRegisterRepository,

    @inject('CryptoProvider')
    private cryptoProvider: ICryptoProvider,
  ) { }

  public async execute({ user_id }: IRequest): Promise<IRegisterData[] | undefined> {
    const registers = await this.registersRepository.findByUserId(user_id);

    if (registers) {
      registers.forEach(register => {
        this.cryptoProvider.decrypt(register.user_id, register.password).then(response => {
          register.password = response;
        });
      });
    }
    return registers;
  }
}

export default ShowRegistersService;
