import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowRegisterByIdService from '../../../../registers/services/ShowRegisterByIdService';
import DeleteRegisterByIdService from '../../../../registers/services/DeleteRegisterByIdService';

export default class RegisterController {

  async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showRegister = container.resolve(ShowRegisterByIdService);

    const register = await showRegister.execute({ id });

    return response.json(register);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteRegister = container.resolve(DeleteRegisterByIdService);

   await deleteRegister.execute({ id });

    return response.status(200).send();
  }

}
