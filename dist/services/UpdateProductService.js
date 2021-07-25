"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../errors/AppError"));

var _Product = _interopRequireDefault(require("../models/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateCompanyService {
  async execute({
    name,
    description,
    img_url,
    have_gluten,
    have_lactose,
    is_ecologic,
    is_vegan,
    bar_code,
    id
  }) {
    const productsRepository = (0, _typeorm.getRepository)(_Product.default);
    const product = await productsRepository.findOne({
      where: {
        id
      }
    });

    if (product) {
      product.name = name;
      product.description = description;
      product.img_url = img_url;
      product.have_gluten = have_gluten;
      product.have_lactose = have_lactose;
      product.is_ecologic = is_ecologic;
      product.is_vegan = is_vegan;
      product.bar_code = bar_code;
      await productsRepository.save(product);
      return product;
    } else {
      throw new _AppError.default('Company id do not exists');
    }
  }

}

var _default = UpdateCompanyService;
exports.default = _default;