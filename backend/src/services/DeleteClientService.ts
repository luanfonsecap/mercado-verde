import { getRepository } from 'typeorm';

import Client from '../models/Client';
import AppError from '../errors/AppError';

interface Request {
	id: string;
}

class DeleteClientService {
	public async execute({ id }: Request): Promise<void> {
		const clientRepository = getRepository(Client);

		const client = await clientRepository.findOne({ id });

		if (!client) {
			throw new AppError(404, 'Client not found with this id.');
		}

		await clientRepository.delete({ id });
	}
}

export default DeleteClientService;
