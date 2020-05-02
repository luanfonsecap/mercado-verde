import { Router } from 'express';

import sessionsRoutes from './sessionsRouter.routes';
import clientsRoutes from './clientsRouter.routes';

const routes = Router();

routes.use('/sessions', sessionsRoutes);
routes.use('/clients', clientsRoutes);

export default routes;
