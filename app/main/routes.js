const _ = require("lodash");

const routes = [
	require("./auth/routers"),
	require("./donate/routers"),
	require("./user/routers"),
];

module.exports = _.flattenDeep(routes);
