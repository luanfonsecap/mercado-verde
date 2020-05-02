import { Router, Request, Response } from 'express';

import AuthenticatedClientService from '../services/AuthenticatedClientService';

const sessionsRouter = Router();

sessionsRouter.post('/clients', async (req: Request, res: Response) => {
	const { email, password } = req.body;

	const authenticatedClientService = new AuthenticatedClientService();

	const client = await authenticatedClientService.execute({ email, password });

	return res.json(client);
});

export default sessionsRouter;
