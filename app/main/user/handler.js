const UserController = require("./controller");

const controller = new UserController();

const validator = require("./validator");

exports.getMany = {
	description: "get user list",
	notes: "return user items",
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
	description: "Get a user by id",
	notes: "return a user by id",
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

exports.updateOne = {
	description: "Update User",
	notes: "Return updated User by id",
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
		payload: validator.updateUser,
	},
};

exports.getMe = {
	description: "Get own user information",
	notes: "Return User information by id",
	tags: ["api", "v1"],
	handler: controller.getMe.bind(controller),
	auth: "jwt",
	validate: {
		headers: validator.checkToken,
	},
};

exports.updateMe = {
	description: "Update own user information",
	notes: "Update own user information",
	tags: ["api", "v1"],
	handler: controller.updateMe.bind(controller),
	auth: "jwt",
	validate: {
		headers: validator.checkToken,
		payload: validator.updateProfile,
	},
};
