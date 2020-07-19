exports.up = function (knex) {
	return knex.schema.createTable("role", (table) => {
		table.increments("id").primary();
		table.string("name").unique().notNullable();
		table.string("description");
	});
};

exports.down = function (knex) {
	knex.schema.raw("DROP TABLE role CASCADE");
};
