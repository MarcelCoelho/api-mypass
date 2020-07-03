import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../../../../users/services/CreateUserService';
import ShowUsersService from '../../../../users/services/ShowUsersService';

export default class UsersController {
  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { email } = request.params;

      const showUser = container.resolve(ShowUsersService);

      const user = await showUser.execute({ email });
      return response.json(user);

    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, url_photo } = request.body;

      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({
        name,
        email,
        password,
        url_photo,
      });

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
