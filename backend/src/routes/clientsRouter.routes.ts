import { Router, Request, Response } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateClientDataService from '../services/UpdateClientDataService';
import UpdateClientPasswordService from '../services/UpdateClientPasswordService';

const clientsRouter = Router();

clientsRouter.use(ensureAuthenticated);

clientsRouter.put('/', async (req: Request, res: Response) => {
	const { id } = req.user;
	const { name, telephone, zipcode, street, number, city, uf } = req.body;

	const updateClientDataService = new UpdateClientDataService();

	await updateClientDataService.execute({
		id,
		name,
		telephone,
		zipcode,
		street,
		number,
		city,
		uf,
	});

	return res.status(204).send();
});

export default clientsRouter;
