
import { IUserData } from '@modules/users/dtos/IUser';

export default interface IUserRepository {
  findById(id: string): Promise<IUserData | null>;
  findByEmail(email: string): Promise<IUserData | null>;
  create(data: IUserData): Promise<void>;
}
