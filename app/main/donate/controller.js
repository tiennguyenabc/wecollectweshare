const BaseControllerCRUD = require("../../base/BaseControllerCRUD");

const DonateService = require("./service");

const jwtDecode = require("jwt-decode");

class DonateController extends BaseControllerCRUD {
	constructor() {
		super(new DonateService());
	}

	async createDonate(request) {
		try {
			// const userId = request.auth.credentials.id;
			const credentials = jwtDecode(request.headers.authorization);
			const userId = credentials.id;
			const { payload } = request;
			const { categoryName } = payload;
			return this.service.createDonate(payload, userId, categoryName);
		} catch (err) {
			throw err;
		}
	}

	async getManyDonateByUserId(request) {
		try {
			const { userId } = request.params;
			return this.service.getManyDonateByUserId(userId);
		} catch (err) {
			throw err;
		}
	}
}

module.exports = DonateController;
