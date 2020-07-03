import { Router } from 'express';

import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import registerRouter from '../../../../modules/registers/infra/http/routes/register.routes';
import registersRouter from '../../../../modules/registers/infra/http/routes/registers.routes';

const routes = Router();

// quando utiliza o 'use' para setar direção, quando for criar os endpoint(get, post, put...)
// nao precisar passar o endereço 'appointments'
// ex: appointmentsRouter.post('/')
routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/register', registerRouter);
routes.use('/registers', registersRouter);

export default routes;
