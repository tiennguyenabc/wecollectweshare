const bcrypt = require("bcrypt");

class PasswordUtils {
	constructor() {
		this.round = parseInt(process.env.SALT_ROUND) || 5;
	}

	hash(password) {
		return bcrypt.hash(password, this.round);
	}

	hashSync(password) {
		return bcrypt.hashSync(password, this.round);
	}

	compare(password, hashPassword) {
		return bcrypt.compare(password, hashPassword);
	}

	compareSync(password, hashPassword) {
		return bcrypt.compareSync(password, hashPassword);
	}
}

module.exports = new PasswordUtils();
