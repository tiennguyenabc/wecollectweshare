exports.up = function (knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments("id").primary();
		table.string("fullName");
		table.string("address");
		table.string("email", 191).unique();
		table.string("password");
		table.integer("roleId");
		table.foreign("roleId").references("role.id").onDelete("CASCADE");
		table.boolean("emailVerified").defaultTo(false);
		table.string("resetPasswordToken");
		table.timestamp("resetPasswordExpire");
	});
};

exports.down = function (knex) {
	return knex.schema.raw("DROP TABLE users CASCADE");
};
