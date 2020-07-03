//import { getRepository, Repository } from 'typeorm';
import MongoClient from 'mongodb';

import IUsersRepository from '../../../../users/repositories/IUsersRepository';
import IUser, { IUserData } from '../../../../users/dtos/IUser';

class UsersRepository implements IUsersRepository {

  private dbName: string = "mypass";
  private tableNameUsers: string = "users";
  private ormRepository: MongoClient.Db;
  private conn: Promise<MongoClient.MongoClient>;

  constructor() {
    //this.conectar();
  }

  public async conectar() {
    this.conn = MongoClient.connect(process.env.MONGO_URL || '');
    this.ormRepository = (await this.conn).db(this.dbName);
  }

  private async desconectar() {
    (await this.conn).close();
  }

  public async findById(id: string): Promise<IUserData | null> {
    try {
      await this.conectar();

      const resultado = await this.ormRepository.collection<IUser>(this.tableNameUsers).findOne({ id });

      return resultado;
    }
    catch (err) {
      return null;
    }
    finally {
      await this.desconectar();
    }
  }

  public async findByEmail(email: string): Promise<IUserData | null> {
    try {
      await this.conectar();

      const resultado = await this.ormRepository.collection<IUser>(this.tableNameUsers).findOne({ email });

      return resultado;
    }
    catch (err) {
      return null;
    }
    finally {
      await this.desconectar();
    }
  }

  public async create(userData: IUserData): Promise<void> {

    await this.conectar();

    await this.ormRepository.collection<IUserData>(this.tableNameUsers).insertOne(userData);

    await this.desconectar();

  };

}

export default UsersRepository;
