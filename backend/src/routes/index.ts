import { Router } from 'express';

import registerRouter from './registerRouter.routes';
import sessionsRoutes from './sessionsRouter.routes';
import clientsRoutes from './clientsRouter.routes';

const routes = Router();

routes.use('/register', registerRouter);
routes.use('/sessions', sessionsRoutes);
routes.use('/clients', clientsRoutes);

export default routes;
