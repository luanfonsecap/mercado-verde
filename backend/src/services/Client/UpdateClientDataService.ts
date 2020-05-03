import { getRepository } from 'typeorm';

import Client from '../../models/Client';
import AppError from '../../errors/AppError';

interface Request {
	id: string;
	name: string;
	telephone: number;
	zipcode: number;
	street: string;
	number: number;
	city: string;
	uf: string;
}

class UpdateClientDataService {
	public async execute({
		id,
		name,
		telephone,
		zipcode,
		street,
		number,
		city,
		uf,
	}: Request): Promise<void> {
		const clientRepository = getRepository(Client);

		let clientToUpdate = await clientRepository.findOne({ id });

		if (!clientToUpdate) {
			throw new AppError(404, 'Client not found with this id.');
		}

		clientToUpdate = {
			...clientToUpdate,
			name,
			telephone,
			zipcode,
			street,
			number,
			city,
			uf,
		};

		await clientRepository.save(clientToUpdate);
	}
}

export default UpdateClientDataService;
