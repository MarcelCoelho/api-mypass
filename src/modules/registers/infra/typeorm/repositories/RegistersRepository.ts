import MongoClient from 'mongodb';

import IRegister , {IRegisterData} from '../../../../registers/dtos/IRegister';
import Register from '../../../../registers/infra/typeorm/entities/Register';
import IRegisterRepository from '../../../../registers/repositories/IRegisterRepository';
//import AppError from '@shared/errors/AppError';

class RegistersRepository implements IRegisterRepository {
  private ormRepository: MongoClient.Db;
  private conn: Promise<MongoClient.MongoClient>;

  constructor() {
    //this.conectar();
  }

  public async conectar() {
    this.conn = MongoClient.connect(process.env.MONGO_URL || '');
    this.ormRepository = (await this.conn).db('mypass');
  }

  private async desconectar() {
    (await this.conn).close();
  }

  public async findById(id: string): Promise<IRegisterData | null> {
    try {
      await this.conectar();

      const resultado = await this.ormRepository.collection<IRegister>("registers").findOne({ id });

      return resultado;
    }
    catch (err) {
      return null;
    }
    finally {
      await this.desconectar();
    }
  }

  public async findByUserId(user_id: string): Promise<IRegisterData[] | undefined> {
    try {
      await this.conectar();

      if (user_id) {

        var query = {user_id: user_id}
        const resultado = await this.ormRepository.collection<IRegister>("registers").find(query).toArray();

        return resultado;
      }
    }
    catch (err) {
      return undefined;
    }
    finally {
      await this.desconectar();
    }
  }

  public async findByName(name: string): Promise<IRegisterData | null> {
    try {
      await this.conectar();

      const resultado = await this.ormRepository.collection<IRegister>("registers").findOne({ name });

      return resultado;
    }
    catch (err) {
      return null;
    }
    finally {
      await this.desconectar();
    }
  }

  public async create(registerData: IRegisterData): Promise<void> {

    await this.conectar();

    const userModel = new Register({
      id: registerData.id,
      name: registerData.name,
      description: registerData.description,
      url: registerData.url,
      url_photo: registerData.url_photo,
      user: registerData.user,
      password: registerData.password,
      user_id: registerData.user_id,
      created_at: registerData.created_at,
      updated_at: registerData.updated_at,
    })

    //userModel.save();
    await this.ormRepository.collection<IRegisterData>("registers").insertOne(registerData);

    await this.desconectar();

  }

  public async remove(id: string): Promise<void> {
    try {
      await this.conectar();

      await this.ormRepository.collection<IRegister>("registers").deleteOne({ id });

    }
    catch (err) {
      return;
    }
    finally {
      await this.desconectar();
    }
  }
}

export default RegistersRepository;
