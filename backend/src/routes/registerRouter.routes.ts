import { Router, Request, Response } from 'express';

import CreateClientService from '../services/Client/CreateClientService';
import CreateProducerService from '../services/CreateProducerService';

const registerRouter = Router();

registerRouter.post('/clients', async (req: Request, res: Response) => {
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

registerRouter.post('/producers', async (req: Request, res: Response) => {
	const { name, email, telephone, tax, city, password, location } = req.body;

	const createProducerService = new CreateProducerService();

	await createProducerService.execute({
		name,
		email,
		telephone,
		tax,
		city,
		password,
		location,
	});

	return res.status(201).send();
});

export default registerRouter;
