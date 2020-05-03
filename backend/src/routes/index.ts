import { Router, Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

import registerRouter from './registerRouter.routes';
import sessionsRoutes from './sessionsRouter.routes';
import clientsRoutes from './clientsRouter.routes';

const routes = Router();

routes.use('/register', registerRouter);
routes.use('/sessions', sessionsRoutes);
routes.use('/clients', clientsRoutes);

routes.use(
	(err: Error, req: Request, res: Response, _next: NextFunction): Response => {
		if (err instanceof AppError) {
			return res
				.status(err.status)
				.json({ status: 'Error', message: err.message });
		}

		return res.status(500).json({ status: 'Error', message: err.message });
	},
);

export default routes;
