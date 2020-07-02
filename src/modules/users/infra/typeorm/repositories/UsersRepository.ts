//import { getRepository, Repository } from 'typeorm';
import MongoClient from 'mongodb';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { IUserData, IUser } from '@modules/users/dtos/IUser';
import AppError from '@shared/errors/AppError';

class UsersRepository implements IUsersRepository {

  private ormRepository: MongoClient.Db;
  private conn: Promise<MongoClient.MongoClient>;

  constructor() {
    //this.conectar();
  }

  public async conectar() {
    this.conn = MongoClient.connect(process.env.MONGO_URL || '', { useNewUrlParser: true, useUnifiedTopology: true });
    this.ormRepository = (await this.conn).db('mypass');
  }

  private async desconectar() {
    (await this.conn).close();
  }

  public async findById(id: string): Promise<IUserData | null> {
    try {
      await this.conectar();

      const resultado = await this.ormRepository.collection<IUser>("users").findOne({ id });

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

      const resultado = await this.ormRepository.collection<IUser>("users").findOne({ email });

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

    const userModel = new User({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      url_photo: userData.url_photo,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
    })

    await this.ormRepository.collection<IUser>("users").save(userModel);

  };

}

export default UsersRepository;
