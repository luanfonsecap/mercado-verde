import { getRepository } from 'typeorm';
import { uuid } from 'uuidv4';
import { hash } from 'bcryptjs';

import Producer from '../models/Producer';
import AppError from '../errors/AppError';

interface Request {
	name: string;
	email: string;
	telephone: number;
	tax: number;
	city: string;
	password: string;
	location: string;
}

class CreateProducerService {
	public async execute({
		name,
		email,
		telephone,
		tax,
		city,
		password,
		location,
	}: Request): Promise<void> {
		const producerRepository = getRepository(Producer);

		const existentProducer = await producerRepository.findOne({
			where: [{ email }, { name }],
		});

		if (existentProducer) {
			throw new AppError(409, 'This email or name is not available.');
		}

		const passwordHash = await hash(password, 8);

		const producer = producerRepository.create({
			id: uuid(),
			name,
			email,
			telephone,
			tax,
			city,
			password: passwordHash,
			likes: 0,
			location,
		});

		await producerRepository.save(producer);
	}
}

export default CreateProducerService;
