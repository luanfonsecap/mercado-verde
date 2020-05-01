class AppError {
	public message: string;

	public status: number;

	constructor(status = 400, message: string) {
		this.message = message;
		this.status = status;
	}
}

export default AppError;
