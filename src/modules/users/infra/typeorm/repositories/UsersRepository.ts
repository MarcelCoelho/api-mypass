//import { getRepository, Repository } from 'typeorm';
import MongoClient from 'mongodb';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUser from '@modules/users/dtos/IUser';
import AppError from '@shared/errors/AppError';
import usersRouter from '../../http/routes/users.routes';


class UsersRepository implements IUsersRepository {

  private ormRepository: MongoClient.Db;
  private conn: Promise<MongoClient.MongoClient>;

  constructor() {
    //this.conectar();
  }

  public async conectar() {
    this.conn = MongoClient.connect('mongodb+srv://mypass:mypass2020@cluster0.4pdwq.mongodb.net/mypass?retryWrites=true&w=majority');
    this.ormRepository = (await this.conn).db('mypass');
  }

  private async desconectar() {
    (await this.conn).close();
  }

  public async findById(id: string): Promise<IUser | null> {
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

  public async findByEmail(email: string): Promise<IUser | null> {
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

  public async create(userData: IUser): Promise<void> {
    const userModel = new User({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password,
      url_photo: userData.url_photo,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
    })

    userModel.save((err) => {
      if (err) throw new AppError(err);
    })

  };

}

export default UsersRepository;
