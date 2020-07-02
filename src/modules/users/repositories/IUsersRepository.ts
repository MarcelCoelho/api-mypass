
import IUser from '@modules/users/dtos/IUser';

export default interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  create(data: IUser): Promise<void>;
}
