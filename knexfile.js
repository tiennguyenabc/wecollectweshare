const path = require("path");

const BASE_PATH = path.join(__dirname, "app", "db");

module.exports = {
	development: {
		client: "pg",
		connection: "postgresql://postgres:hoang123@localhost:5432/quyen-gop-dev",
		migrations: {
			directory: path.join(BASE_PATH, "migrations"),
		},
		seeds: {
			directory: path.join(BASE_PATH, "seeds"),
		},
	},
};
