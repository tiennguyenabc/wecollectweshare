const Joi = require("@hapi/joi");

const {
	checkToken,
	queryParams,
	idParam,
} = require("../../utils/validateUtils");

exports.checkToken = checkToken;

exports.queryParams = queryParams;

exports.idParam = idParam;

exports.createDonate = {
	name: Joi.string().required(),
	description: Joi.string(),
	status: Joi.string().default("checking"),
	categoryId: Joi.number(),
	userId: Joi.number(),
	categoryName: Joi.string(),
};

exports.updateDonate = {
	name: Joi.string(),
	description: Joi.string(),
	status: Joi.string(), //checking, rejected, willReceive, completed
};
