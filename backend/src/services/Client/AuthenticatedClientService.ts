import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Client from '../../models/Client';
import AppError from '../../errors/AppError';
import authConfig from '../../config/auth';

interface Request {
	email: string;
	password: string;
}

interface Response {
	token: string;
	name: string;
	email: string;
}

class AuthenticatedClientService {
	public async execute({ email, password }: Request): Promise<Response> {
		const clientRepository = getRepository(Client);

		const client = await clientRepository.findOne({ where: { email } });

		if (!client) {
			throw new AppError(401, 'Incorrect email or password combination.');
		}

		const passwordMatch = await compare(password, client.password);

		if (!passwordMatch) {
			throw new AppError(401, 'Incorrect email or password combination.');
		}

		const { secret, expiresIn } = authConfig.jwt;

		const token = sign({}, secret, {
			subject: client.id,
			expiresIn,
		});

		return { token, name: client.name, email: client.email };
	}
}

export default AuthenticatedClientService;
