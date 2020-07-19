exports.up = function (knex) {
	return knex.schema.createTable("donate", (table) => {
		table.increments("id").primary();
		table.string("name");
		table.string("description");
		table.jsonb("image");
		table.string("status");
		table.integer("categoryId");
		table.foreign("categoryId").references("category.id").onDelete("CASCADE");
		table.integer("userId");
		table.foreign("userId").references("users.id").onDelete("CASCADE");
		table.string("addressReceive");
	});
};

exports.down = function (knex) {
	return knex.schema.raw("DROP TABLE donate CASCADE");
};
