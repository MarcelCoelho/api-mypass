import {IRegisterData} from '../../registers/dtos/IRegister';

export default interface IRegisterRepository {
  findById(id: string): Promise<IRegisterData | null>;
  findByUserId(user_id: string): Promise<IRegisterData[] | undefined>;
  findByName(name: string): Promise<IRegisterData | null>;
  create(data: IRegisterData): Promise<void>;
  remove(id: string): Promise<void>;
}
