import { Router } from 'express';

import clientsRoutes from './clientsRouter.routes';

const routes = Router();

routes.use('/clients', clientsRoutes);

export default routes;
