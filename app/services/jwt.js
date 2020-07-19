const jsonwebtoken = require("jsonwebtoken");
const _ = require("lodash");

class Jwt {
	constructor() {
		(this.secret = process.env.JWT_SECRET || "enouvo123"),
			(this.ttl = process.env.JWT_TTL || 7 * 24 * 60 * 60 * 1000);
	}

	issue(payload, jwtOptions = {}) {
		return jsonwebtoken.sign(
			_.assign(payload, {
				ttl: this.ttl,
			}),
			this.secret
		);
	}
}

module.exports = new Jwt();
