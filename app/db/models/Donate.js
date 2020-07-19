const CustomModel = require("./CustomModel");

class Donate extends CustomModel {
	static get tableName() {
		return "donate";
	}
}

module.exports = Donate;
