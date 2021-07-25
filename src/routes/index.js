"use strict";
exports.__esModule = true;
var express_1 = require("express");
var companies_routes_1 = require("./companies.routes");
var products_routes_1 = require("./products.routes");
var routes = express_1.Router();
routes.use('/companies', companies_routes_1["default"]);
routes.use('/products', products_routes_1["default"]);
exports["default"] = routes;
