import { Router, Request, Response } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateClientDataService from '../services/Client/UpdateClientDataService';
import UpdateClientPasswordService from '../services/Client/UpdateClientPasswordService';
import DeleteClientService from '../services/Client/DeleteClientService';

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

clientsRouter.patch('/', async (req: Request, res: Response) => {
	const { id } = req.user;
	const { password, newPassword } = req.body;

	const updateClientPasswordService = new UpdateClientPasswordService();

	await updateClientPasswordService.execute({ id, password, newPassword });

	return res.status(204).send();
});

clientsRouter.delete('/', async (req: Request, res: Response) => {
	const { id } = req.user;

	const deleteClientService = new DeleteClientService();

	await deleteClientService.execute({ id });

	return res.status(204).send();
});

export default clientsRouter;
