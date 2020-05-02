import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';

interface TokenPayload {
	iat: number;
	exp: number;
	sub: string;
}

export default function ensureAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	const { authorization } = req.headers;

	if (!authorization) {
		throw new AppError(401, 'No token provided.');
	}

	const [, token] = authorization.split(' ');

	if (!token) {
		throw new AppError(401, 'Invalid token syntax.');
	}

	try {
		const decoded = verify(token, authConfig.jwt.secret);

		const { sub } = decoded as TokenPayload;

		req.user = {
			id: sub,
		};

		next();
	} catch (err) {
		throw new AppError(401, 'Invalid JWT token.');
	}
}
