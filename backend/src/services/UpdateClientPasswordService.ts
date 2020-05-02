import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import Client from '../models/Client';
import AppError from '../errors/AppError';

interface Request {
	id: string;
	password: string;
	newPassword: string;
}

class UpdateClientPasswordService {
	public async execute({ id, password, newPassword }: Request): Promise<void> {
		const clientRepository = getRepository(Client);

		const client = await clientRepository.findOne({ id });

		if (!client) {
			throw new AppError(404, 'Client not found with this id.');
		}

		const matchPassword = await compare(password, client.password);

		if (!matchPassword) {
			throw new AppError(401, 'Incorrect password.');
		}

		const newPasswordHash = await hash(newPassword, 8);

		client.password = newPasswordHash;

		await clientRepository.save(client);
	}
}

export default UpdateClientPasswordService;
