"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Product = _interopRequireDefault(require("../models/Product"));

var _typeorm = require("typeorm");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProductRepository = (_dec = (0, _typeorm.EntityRepository)(_Product.default), _dec(_class = class ProductRepository extends _typeorm.Repository {
  async findByProductNameAndFilters({
    key_name,
    filters
  }) {
    const query = {};
    Object.assign(query, key_name !== 'undefined' && {
      name: (0, _typeorm.ILike)(`%${key_name.toLowerCase()}%`)
    }, (filters === null || filters === void 0 ? void 0 : filters.have_gluten) !== undefined && {
      have_gluten: filters.have_gluten
    }, (filters === null || filters === void 0 ? void 0 : filters.have_lactose) !== undefined && {
      have_lactose: filters === null || filters === void 0 ? void 0 : filters.have_lactose
    }, (filters === null || filters === void 0 ? void 0 : filters.is_ecologic) !== undefined && {
      is_ecologic: filters === null || filters === void 0 ? void 0 : filters.is_ecologic
    }, (filters === null || filters === void 0 ? void 0 : filters.is_vegan) !== undefined && {
      is_vegan: filters === null || filters === void 0 ? void 0 : filters.is_vegan
    });
    const findProducts = await this.find({
      where: query
    });
    return findProducts;
  }

  async findByClassification() {}

}) || _class);
var _default = ProductRepository;
exports.default = _default;