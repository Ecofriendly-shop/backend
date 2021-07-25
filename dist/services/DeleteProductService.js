"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteProductService {
  async execute({
    id
  }) {
    const productsRepository = (0, _typeorm.getRepository)(_Product.default);
    const product = await productsRepository.findOne({
      where: {
        id
      }
    });

    if (!product) {
      throw new _AppError.default('Product id do not exists');
    }

    await productsRepository.remove(product);
  }

}

var _default = DeleteProductService;
exports.default = _default;