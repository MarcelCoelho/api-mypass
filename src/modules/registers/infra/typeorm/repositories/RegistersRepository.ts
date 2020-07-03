import MongoClient from 'mongodb';

import IRegister, { IRegisterData } from '../../../../registers/dtos/IRegister';
import Register from '../../../../registers/infra/typeorm/entities/Register';
import IRegisterRepository from '../../../../registers/repositories/IRegisterRepository';
//import AppError from '@shared/errors/AppError';

class RegistersRepository implements IRegisterRepository {

  private dbName: string = "mypass";
  private tableNameRegisters: string = "registers";
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

  public async findById(id: string): Promise<IRegisterData | null> {
    try {
      await this.conectar();

      const resultado = await this.ormRepository.collection<IRegister>(this.tableNameRegisters).findOne({ id });

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

        var query = { user_id: user_id }
        const resultado = await this.ormRepository.collection<IRegister>(this.tableNameRegisters).find(query).toArray();

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

      const resultado = await this.ormRepository.collection<IRegister>(this.tableNameRegisters).findOne({ name });

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

    await this.ormRepository.collection<IRegisterData>(this.tableNameRegisters).insertOne(registerData);

    await this.desconectar();

  }

  public async remove(id: string): Promise<void> {
    try {
      await this.conectar();

      await this.ormRepository.collection<IRegister>(this.tableNameRegisters).deleteOne({ id });

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
