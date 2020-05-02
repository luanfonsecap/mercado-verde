import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';

import routes from './routes';
import AppError from './errors/AppError';

class App {
	public app: Express;

	constructor() {
		this.app = express();

		this.middlewares();
		this.routes();
	}

	private middlewares(): void {
		this.app.use(express.json());
		this.app.use(cors());
	}

	private routes(): void {
		this.app.use(routes);
		this.app.use(this.globalHandlerErrors);
	}

	private globalHandlerErrors(
		err: Error,
		req: Request,
		res: Response,
		_next: NextFunction,
	): Response {
		if (err instanceof AppError) {
			return res
				.status(err.status)
				.json({ status: 'OK', message: err.message });
		}

		return res.status(500).json({ status: 'Error', message: err.message });
	}
}

export default new App().app;
