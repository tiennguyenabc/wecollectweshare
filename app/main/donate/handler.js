const DonateController = require("./controller");

const controller = new DonateController();

const validator = require("./validator");
const { control } = require("../..");

exports.getMany = {
	description: "Get list donate",
	notes: "Return donate items",
	tags: ["api", "v1"],
	handler: controller.getMany.bind(controller),
	auth: {
		strategy: "jwt",
		scope: ["admin"],
	},
	validate: {
		headers: validator.checkToken,
		query: validator.queryParams,
	},
};

exports.getOne = {
	description: "Get a donate by id",
	notes: "return a donate by id",
	tags: ["api", "v1"],
	handler: controller.getOne.bind(controller),
	auth: {
		strategy: "jwt",
		scope: ["admin"],
	},
	validate: {
		headers: validator.checkToken,
		params: {
			id: validator.idParam,
		},
	},
};

exports.getManyDonateByUserId = {
	description: "get list donate by userId",
	notes: "Return donate items by userId",
	tags: ["api", "v1"],
	handler: controller.getManyDonateByUserId.bind(controller),
	auth: {
		strategy: "jwt",
		scope: ["admin", "user"],
	},
	validate: {
		headers: validator.checkToken,
		params: {
			id: validator.idParam,
		},
		query: validator.queryParams,
	},
};

exports.createDonate = {
	description: "add a donate",
	notes: "return added donate",
	tags: ["api", "v1"],
	handler: controller.createDonate.bind(controller),
	auth: {
		strategy: "jwt",
		scope: ["admin", "user"],
	},
	auth: false,
	validate: {
		headers: validator.checkToken,
		payload: validator.createDonate,
	},
};

exports.updateOne = {
	description: "Update a donate by id",
	notes: "Return updated a donate by id",
	tags: ["api", "v1"],
	handler: controller.updateOne.bind(controller),
	auth: {
		strategy: "jwt",
		scope: ["admin"],
	},
	validate: {
		headers: validator.checkToken,
		params: {
			id: validator.idParam,
		},
		query: validator.updateDonate,
	},
};
