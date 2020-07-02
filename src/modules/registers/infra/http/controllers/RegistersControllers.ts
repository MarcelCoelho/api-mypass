import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRegisterService from '@modules/registers/services/CreateRegisterService';
import UpdateRegisterService from '@modules/registers/services/UpdateRegisterService';
import ShowRegisterService from '@modules/registers/services/ShowRegistersService';
import ShowRegisterByIdService from '@modules/registers/services/ShowRegisterByIdService';

export default class RegistersController {

  async indexById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showRegister = container.resolve(ShowRegisterByIdService);

    const register = await showRegister.execute({ id });

    return response.json(register);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const showRegister = container.resolve(ShowRegisterService);

    const registers = await showRegister.execute({ user_id });

    return response.json(registers);
  }

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, url, url_photo, user, password, user_id } = request.body;

      const createRegister = container.resolve(CreateRegisterService);

      const register = await createRegister.execute({
        name,
        description,
        url,
        url_photo,
        user,
        password,
        user_id,
      });

      return response.json(register);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, description, url, url_photo, user, password, user_id } = request.body;

      const createRegister = container.resolve(UpdateRegisterService);

      const register = await createRegister.execute({
        id,
        name,
        description,
        url,
        url_photo,
        user,
        password,
        user_id,
      });

      delete register.password;

      return response.json(register);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

}
