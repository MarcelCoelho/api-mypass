import { Router } from 'express';

//import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticate';
import RegisterController from '../../../../registers/infra/http/controllers/RegisterController';

const registerController = new RegisterController();

const registersRouter = Router();
//registersRouter.use(ensureAuthenticated);

registersRouter.get('/:id', registerController.index);
registersRouter.delete('/:id', registerController.delete);

export default registersRouter;
