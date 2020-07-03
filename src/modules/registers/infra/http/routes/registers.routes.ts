import { Router } from 'express';

//import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticate';
import RegistersController from '../../../../registers/infra/http/controllers/RegistersControllers';

const registersController = new RegistersController();

const registersRouter = Router();

// SoC - Separator of concerns - Separação de responsabilidades
// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta

//registersRouter.use(ensureAuthenticated);

registersRouter.get('/:user_id', registersController.index);
registersRouter.post('/', registersController.create);
registersRouter.put('/:id', registersController.update);

export default registersRouter;
