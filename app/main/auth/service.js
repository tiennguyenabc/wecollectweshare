const Boom = require("@hapi/boom");
const _ = require("lodash");

const Models = require("../../db/models");

const PasswordUtils = require("../../services/password");
const jwt = require("../../services/jwt");

class AuthService {
	async login(payload) {
		try {
			const { email } = payload;
			const user = await Models.User.query()
				.findOne({ email })
				.leftJoin("role", "users.roleId", "role.id")
				.select(["users.*", "role.name as scope"]);
			if (!user) {
				throw Boom.notFound("This account is not exist");
			}

			const isCorrectPassword = PasswordUtils.compare(
				payload.password,
				user.password
			);

			if (!isCorrectPassword) {
				throw Boom.unauthorized("Incorrect email or password");
			}

			const data = _.pick(user, ["email", "id", "scope"]);
			return _.assign(
				{
					token: jwt.issue(data),
				},
				data
			);
		} catch (err) {
			throw err;
		}
	}

	async register(payload) {
		try {
			const { email } = payload;
			const checkUserByEmail = await Models.User.query().findOne({ email });
			if (checkUserByEmail) {
				throw Boom.badRequest("Email is existing");
			}

			const hashPassword = PasswordUtils.hash(payload.password);
			payload.password = hashPassword;

			const findRole = await Models.Role.query().findOne({
				name: "user",
			});
			payload.roleId = findRole.id;

			// payload.roleId = 2; // scope: user

			let data = await Models.User.query().insert(payload).returning("*");
			data.scope = findRole.name;
			data = _.pick(data, ["email", "id", "scope"]);
			return _.assign(
				{
					token: jwt.issue(data),
				},
				data
			);
		} catch (err) {
			throw err;
		}
	}
}

module.exports = AuthService;
