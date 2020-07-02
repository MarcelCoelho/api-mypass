import IRegister from '@modules/registers/dtos/IRegister';

import IRegisterRepositoryDTO from '@modules/registers/dtos/IRegister';

export default interface IRegisterRepository {
  findById(id: string): Promise<IRegister | null>;
  findByUserId(user_id: string): Promise<IRegister[] | undefined>;
  findByName(name: string): Promise<IRegister | null>;
  create(data: IRegisterRepositoryDTO): Promise<void>;
  remove(id: string): Promise<void>;
}
