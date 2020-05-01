import { Router, Request, Response } from 'express';

import CreateClientService from '../services/CreateClientService';

const clientsRouter = Router();

clientsRouter.post('/', async (req: Request, res: Response) => {
	const {
		name,
		email,
		telephone,
		zipcode,
		street,
		number,
		city,
		uf,
		password,
	} = req.body;

	const createClientService = new CreateClientService();

	const client = await createClientService.execute({
		name,
		email,
		telephone,
		zipcode,
		street,
		number,
		city,
		uf,
		password,
	});

	return res.json({ name: client.name, email: client.email });
});

export default clientsRouter;
