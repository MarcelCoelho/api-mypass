import { container } from 'tsyringe';
import '@modules/users/providers/HashProvider';
import '@modules/registers/providers/CryptoProvider';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IRegistersRepository from '@modules/registers/repositories/IRegisterRepository';
import RegistersRepository from '@modules/registers/infra/typeorm/repositories/RegistersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IRegistersRepository>(
  'RegistersRepository',
  RegistersRepository,
);
