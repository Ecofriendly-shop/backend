"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _productsRepository = _interopRequireDefault(require("../repositories/productsRepository"));

var _CreateProductService = _interopRequireDefault(require("../services/CreateProductService"));

var _DeleteProductService = _interopRequireDefault(require("../services/DeleteProductService"));

var _UpdateProductService = _interopRequireDefault(require("../services/UpdateProductService"));

var _typeorm = require("typeorm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productsRoutes = (0, _express.Router)(); // CREATE

productsRoutes.post('/', async (req, res) => {
  try {
    const {
      name,
      bar_code,
      have_gluten,
      description,
      have_lactose,
      img_url,
      is_ecologic,
      is_vegan
    } = req.body;
    const createProduct = new _CreateProductService.default();
    const product = await createProduct.execute({
      bar_code,
      description,
      have_gluten,
      have_lactose,
      img_url,
      is_ecologic,
      is_vegan,
      name
    });
    return res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
}); // READ

productsRoutes.get('/', async (req, res) => {
  try {
    const {
      q,
      is_vegan,
      is_ecologic,
      have_gluten,
      have_lactose
    } = req.query;
    const productsRepository = (0, _typeorm.getCustomRepository)(_productsRepository.default);
    const products = await productsRepository.findByProductNameAndFilters({
      key_name: String(q),
      filters: {
        is_vegan: is_vegan === 'true' ? true : is_vegan === 'false' ? false : undefined,
        is_ecologic: is_ecologic === 'true' ? true : is_ecologic === 'false' ? false : undefined,
        have_gluten: have_gluten === 'true' ? true : have_gluten === 'false' ? false : undefined,
        have_lactose: have_lactose === 'true' ? true : have_lactose === 'false' ? false : undefined
      }
    });
    return res.json(products); // const products = await productsRepository.find();
    // return res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
}); // UPDATE

productsRoutes.put('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      name,
      bar_code,
      have_gluten,
      description,
      have_lactose,
      img_url,
      is_ecologic,
      is_vegan
    } = req.body;
    const updateProductService = new _UpdateProductService.default();
    const product = await updateProductService.execute({
      id,
      bar_code,
      is_vegan,
      is_ecologic,
      have_lactose,
      name,
      img_url,
      description,
      have_gluten
    });
    return res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
}); // DELETE

productsRoutes.delete('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const deleteProductService = new _DeleteProductService.default();
    await deleteProductService.execute({
      id
    });
    return res.json({
      message: 'successfully deleted'
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
});
var _default = productsRoutes;
exports.default = _default;