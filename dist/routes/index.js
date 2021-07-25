"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _companies = _interopRequireDefault(require("./companies.routes"));

var _products = _interopRequireDefault(require("./products.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/companies', _companies.default);
routes.use('/products', _products.default);
var _default = routes;
exports.default = _default;