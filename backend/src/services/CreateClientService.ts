import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Client from '../models/Client';
import AppError from '../errors/AppError';

interface Request {
	name: string;
	email: string;
	telephone: number;
	zipcode: number;
	street: string;
	number: number;
	city: string;
	uf: string;
	password: string;
}

class CreateClientService {
	public async execute({
		name,
		email,
		telephone,
		zipcode,
		street,
		number,
		city,
		uf,
		password,
	}: Request): Promise<Client> {
		const clientRepository = getRepository(Client);

		const clientExist = await clientRepository.findOne({ where: { email } });

		if (clientExist) {
			throw new AppError(400, 'This email is already being used');
		}

		const passwordHash = await hash(password, 8);

		const client = clientRepository.create({
			name,
			email,
			telephone,
			zipcode,
			street,
			number,
			city,
			uf,
			password: passwordHash,
		});

		await clientRepository.save(client);

		return client;
	}
}

export default CreateClientService;
