require("dotenv").config();

const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const Bell = require("@hapi/bell");
const hapiAuthJwt2 = require("hapi-auth-jwt2");
const HapiSwagger = require("hapi-swagger");

const routes = require("./main/routes");

const server = new Hapi.Server({
	host: process.env.APP_HOST || "localhost",
	port: process.env.PORT || 3000,
	routes: {
		cors: {
			origin: ["*"],
			headers: ["Authorization", "Content-Type"],
			credentials: true,
		},
		validate: {
			failAction: async (request, h, err) => {
				if (process.env.NODE_ENV === "production") {
					throw err;
				} else {
					console.error(err);
					throw err;
				}
			},
		},
	},
});

const validateUser = (decoded, request) => {
	if (decoded && decoded.id) {
		return {
			isValid: true,
		};
	}
	return {
		isValid: false,
	};
};

const apiVersionOptions = {
	basePath: "/api",
	validVersions: [1, 2],
	defaultVersion: 1,
	vendorName: "api",
};

const swaggerOptions = {
	pathPrefixSize: 3,
	host: process.env.HOST,
	basePath: apiVersionOptions.basePath,
	info: {
		title: "Proxibox API Documentation",
		description: "",
	},
	deReference: false,
	securityDefinitions: {
		jwt: {
			type: "Add Authorization Token here",
			name: "Authorization",
			in: "header",
		},
	},
	expanded: "none",
	security: [{ jwt: [] }],
};

async function start() {
	const plugins = [
		Inert,
		Vision,
		{
			plugin: require("./plugins/logger"),
			options: {
				name: "proxibox-pharma-api",
				prettyPrint: process.env.NODE_ENV !== "production",
				redact: ["req.headers.authorization"],
			},
		},
		hapiAuthJwt2,
		Bell,
	];
	if (!process.env.SWAGGER_DISABLED) {
		plugins.push({
			plugin: HapiSwagger,
			options: swaggerOptions,
		});
	}

	try {
		await server.register(plugins);
		server.auth.strategy("jwt", "jwt", {
			key: process.env.JWT_SECRET || "enouvo123",
			validate: validateUser,
			verifyOptions: {
				ignoreExpiration: true,
			},
		});
		server.auth.default("jwt");
		server.route(routes);
		await server.start();
	} catch (err) {
		throw err;
	}

	console.log("Server running at: ", server.info.uri);
}

start();

module.exports = server;
