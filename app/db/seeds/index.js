const Models = require("../models");

const PasswordUtils = require("../../services/password");
const password = require("../../services/password");

exports.seed = async function () {
	// await Models.Role.query().insert([
	// 	{
	// 		name: "admin",
	// 		description: "admin has all the power",
	// 	},
	// 	{
	// 		name: "user",
	// 		description: "user",
	// 	},
	// ]);

	// await Models.User.query().insert([
	// 	{
	// 		fullName: "admin",
	// 		email: "admin@enouvo.com",
	// 		password: PasswordUtils.hashSync("enouvo123"),
	// 		roleId: 1,
	// 	},
	// 	{
	// 		fullName: "user1",
	// 		email: "user1@enouvo.com",
	// 		password: PasswordUtils.hashSync("enouvo123"),
	// 		roleId: 2,
	// 	},
	// ]);

	await Models.Category.query().insert([
		{
			name: "Book",
			description: "books",
			image: "https://cafefcdn.com/thumb_w/640/2017/photo-0-1514690372366.jpg",
		},
		{
			name: "Laptop",
			description: "Laptops",
			image:
				"https://phucanhcdn.com/media/product/37535_laptop_hp_15s_du1040tx_8re77pa_3.jpg",
		},
	]);

	await Models.Donate.query().insert([
		{
			name: "Book",
			description: "Books",
			image: {
				images: [
					"https://salt.tikicdn.com/assets/cms/bookcare/img/bk1.jpg",
					"https://salt.tikicdn.com/cache/550x550/ts/product/17/01/b0/db65c4926f1ef82e8415fa8b0d3789c5.jpg",
				],
			},
			status: "checking", // checking -> will receive -> completed
			categoryId: 1,
			userId: 2,
		},
	]);
};
