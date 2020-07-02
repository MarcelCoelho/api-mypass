import { Router } from 'express';

import UsersController from '@modules/users/infra/http/controllers/UsersControllers';

const usersControllers = new UsersController();

const usersRouter = Router();

// SoC - Separator of concerns - Separação de responsabilidades
// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta

usersRouter.get('/:email', usersControllers.show);
usersRouter.post('/', usersControllers.create);

export default usersRouter;
