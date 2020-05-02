import { Router, Request, Response } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const clientsRouter = Router();

clientsRouter.use(ensureAuthenticated);

export default clientsRouter;
