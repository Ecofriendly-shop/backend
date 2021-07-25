"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Company = _interopRequireDefault(require("../models/Company"));

var _typeorm = require("typeorm");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CompanyRepository = (_dec = (0, _typeorm.EntityRepository)(_Company.default), _dec(_class = class CompanyRepository extends _typeorm.Repository {}) || _class);
var _default = CompanyRepository;
exports.default = _default;