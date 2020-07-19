exports.up = function (knex) {
	return knex.schema.createTable("category", (table) => {
		table.increments("id").primary();
		table.string("name");
		table.string("description");
		table.string("image");
	});
};

exports.down = function (knex) {
  return knex.schema.raw("DROP TABLE category CASCADE");
};
