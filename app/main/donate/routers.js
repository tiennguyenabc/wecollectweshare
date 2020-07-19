const handler = require("./handler");

const Routes = [
	{
		method: "GET",
		path: "/api/v1/donates",
		config: handler.getMany,
	},
	{
		method: "GET",
		path: "/api/v1/donates/{id}",
		config: handler.getOne,
	},
	{
		method: "GET",
		path: "/api/v1/users/{userId}/donates",
		config: handler.getManyDonateByUserId,
	},
	{
		method: "POST",
		path: "/api/v1/donates",
		config: handler.createDonate,
	},
	{
		method: "PUT",
		path: "/api/v1/donates/{id}",
		config: handler.updateOne,
	},
];

module.exports = Routes;
