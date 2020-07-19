const BaseServiceCRUD = require("../../base/BaseServiceCRUD");

const Models = require("../../db/models");

class UserService extends BaseServiceCRUD {
	constructor() {
		super(Models.User, "User");
	}

	getMe(id) {
		return Models.User.query().findById(id);
	}

	async updateMe(id, payload) {
		try {
			return Models.User.query().patchAndFetchById(id, payload);
		} catch (err) {
			throw err;
		}
	}
}

module.exports = UserService;
