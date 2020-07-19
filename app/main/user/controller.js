const BaseControllerCRUD = require("../../base/BaseControllerCRUD");

const UserService = require("./service");

class UserController extends BaseControllerCRUD {
	constructor() {
		super(new UserService());
	}

	async getMe(request) {
		try {
			const { id } = request.auth.credentials;
			return this.service.getMe(userId);
		} catch (err) {
			throw err;
		}
	}

	async updateMe(request) {
		try {
			const { id } = request.auth.credentials;
			const { payload } = request;
			return this.service.updateMe(id, payload);
		} catch (err) {
			throw err;
		}
	}
}

module.exports = UserController;
