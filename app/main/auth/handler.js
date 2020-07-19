const AuthController = require("./controller");
const validator = require("./validator");
const controller = new AuthController();

exports.login = {
	description: "Login to an account",
	notes: "Return user and token",
	tags: ["api", "v1"],
	handler: controller.login.bind(controller),
	auth: false,
	validate: {
		headers: validator.checkToken,
		payload: validator.validateLogin,
	},
};

exports.register = {
	description: "Register an account",
	notes: "Return user and token",
	tags: ["api", "v1"],
	handler: controller.register.bind(controller),
	auth: false,
	validate: {
		payload: validator.validateRegister,
	},
};

exports.logout = {
	description: "logout api",
	notes: "user logout api",
	tags: ["api", "v1"],
	handler: controller.logout.bind(controller),
};
