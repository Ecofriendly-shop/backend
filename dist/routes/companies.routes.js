"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _companiesRepository = _interopRequireDefault(require("../repositories/companiesRepository"));

var _CreateCompanyService = _interopRequireDefault(require("../services/CreateCompanyService"));

var _DeleteCompanyService = _interopRequireDefault(require("../services/DeleteCompanyService"));

var _UpdateCompanyService = _interopRequireDefault(require("../services/UpdateCompanyService"));

var _typeorm = require("typeorm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const companiesRoutes = (0, _express.Router)(); // CREATE

companiesRoutes.post('/', async (req, res, next) => {
  try {
    const {
      name,
      description,
      img_url,
      lat,
      long
    } = req.body;
    const createCompany = new _CreateCompanyService.default();
    const company = await createCompany.execute({
      name,
      description,
      img_url,
      lat,
      long
    });
    return res.json(company);
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
}); // READ

companiesRoutes.get('/', async (req, res) => {
  try {
    const companiesRepository = (0, _typeorm.getCustomRepository)(_companiesRepository.default);
    const companies = await companiesRepository.find();
    return res.json(companies);
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
}); // UPDATE

companiesRoutes.put('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      name,
      description,
      lat,
      long,
      img_url
    } = req.body;
    const updateCompany = new _UpdateCompanyService.default();
    const company = await updateCompany.execute({
      description,
      name,
      lat,
      long,
      id,
      img_url
    });
    return res.json(company);
  } catch (err) {
    return res.status(400).json({
      error: err.message
    });
  }
}); // DELETE

companiesRoutes.delete('/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const deleteCompany = new _DeleteCompanyService.default();
    await deleteCompany.execute({
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
var _default = companiesRoutes;
exports.default = _default;