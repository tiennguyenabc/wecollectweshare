const AuthService = require("./service");

class AuthController {
	constructor() {
		this.service = new AuthService();
	}

	async login(request) {
		try {
			const { payload } = request;
			return this.service.login(payload);
		} catch (err) {
			throw err;
		}
	}

	async register(request) {
		try {
			const { payload } = request;
			return this.service.register(payload);
		} catch (err) {
			throw err;
		}
	}

	async logout(request) {
		try {
			return {
				message: "Log out success",
			};
		} catch (err) {
			throw err;
		}
	}
}

module.exports = AuthController;
