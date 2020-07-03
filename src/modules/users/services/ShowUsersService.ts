import { injectable, inject } from 'tsyringe';

import IUserRepository from '../../users/repositories/IUsersRepository';
import ICryptoProvider from '../../registers/providers/CryptoProvider/models/ICryptoProvider';

import { IUserData } from '../../users/dtos/IUser';

interface IRequest {
  email: string;
}

@injectable()
class ShowUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('CryptoProvider')
    private cryptoProvider: ICryptoProvider,
  ) { }

  public async execute({ email }: IRequest): Promise<IUserData | null> {
    const user = await this.usersRepository.findByEmail(email);

    /* if (registers) {
       registers.forEach(register => {
         this.cryptoProvider.decrypt(register.user_id, register.password).then(response => {
           register.password = response;
         });
       });
     }*/
    return user;
  }
}

export default ShowUsersService;
