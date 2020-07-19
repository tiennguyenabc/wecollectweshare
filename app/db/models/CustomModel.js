const { QueryBuilder } = require("objection");
const { Model } = require("./config");

const { buildFilter } = require("objection-filter");

const _ = require("lodash");

class CustomQueryBuilder extends QueryBuilder {
	upsert(model) {
		if (model.id) {
			return this.update(model).where("id", model.id);
		}
		return this.insert(model);
	}

	queryBuilder(query) {
		if (query.page && query.pageSize) {
			return this.page(query.page, query.pageSize);
		}

		return this.page(0, 50);
	}
}

class CustomModel extends Model {
	static get QueryBuilder() {
		return CustomQueryBuilder;
	}

	static queryBuilder(query, baseModel) {
		return buildFilter(this).build(query, baseModel);
	}

	$formatJson(json) {
		let superJson = super.$formatJson(json);
		if (this.constructor.$hidden && this.constructor.$hidden.length > 0) {
			superJson = _.omit(superJson, this.constructor.$hidden);
		}
		return superJson;
	}
}

module.exports = CustomModel;
