const BaseServiceCRUD = require("../../base/BaseServiceCRUD");

const Models = require("../../db/models");
const _ = require("lodash");

class DonateService extends BaseServiceCRUD {
	constructor() {
		super(Models.Donate, "Donate");
	}
	async createDonate(payload, userId, categoryName) {
		try {
			const categoryId = Models.Category.query()
				.findOne({ name: categoryName.toLocaleUpperCase() })
				.select("category.id as categoryId");
			payload.userId = userId;
			payload.categoryId = categoryId;

			return Models.Donate.query()
				.insert(_.omit(payload, ["categoryName"]))
				.returning("*");
		} catch (err) {
			throw err;
		}
	}

	async getManyDonateByUserId(userId) {
		try {
			return Models.Donate.query().where({ userId });
		} catch (err) {
			throw err;
		}
	}
}

module.exports = DonateService;
