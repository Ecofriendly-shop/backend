"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateProductService {
  async execute({
    name,
    description,
    img_url,
    have_gluten,
    have_lactose,
    is_ecologic,
    is_vegan,
    bar_code
  }) {
    const productsRepository = (0, _typeorm.getRepository)(_Product.default);
    const checkIfProductExists = await productsRepository.findOne({
      where: {
        bar_code
      }
    });

    if (checkIfProductExists) {
      throw new _AppError.default('A product with the same bar code already exists');
    }

    const product = productsRepository.create({
      name,
      bar_code,
      have_gluten,
      description,
      have_lactose,
      img_url,
      is_ecologic,
      is_vegan
    });
    await productsRepository.save(product);
    return product;
  }

}

var _default = CreateProductService;
exports.default = _default;