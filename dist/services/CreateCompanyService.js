"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Company = _interopRequireDefault(require("../models/Company"));

var _AppError = _interopRequireDefault(require("../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateCompanyService {
  async execute({
    name,
    description,
    img_url,
    lat,
    long
  }) {
    const companiesRepository = (0, _typeorm.getRepository)(_Company.default);
    const checkIfCompanyExists = await companiesRepository.findOne({
      where: {
        lat,
        long
      }
    });

    if (checkIfCompanyExists) {
      throw new _AppError.default('A company with the same longitude and latitude already exists');
    }

    const company = companiesRepository.create({
      name,
      description,
      img_url,
      lat,
      long
    });
    await companiesRepository.save(company);
    return company;
  }

}

var _default = CreateCompanyService;
exports.default = _default;