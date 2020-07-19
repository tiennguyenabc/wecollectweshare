const {
	checkToken,
	strEmail,
	strPassword,
} = require("../../utils/validateUtils");
const Joi = require("@hapi/joi");

exports.checkToken = checkToken;

exports.validateLogin = {
	email: strEmail().required(),
	password: strPassword().required(),
};

exports.validateRegister = {
	email: strEmail().required(),
	password: strPassword().required(),
};
