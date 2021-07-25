"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Company = _interopRequireDefault(require("../models/Company"));

var _AppError = _interopRequireDefault(require("../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateCompanyService {
  async execute({
    name,
    description,
    img_url,
    lat,
    long,
    id
  }) {
    const companiesRepository = (0, _typeorm.getRepository)(_Company.default);
    const company = await companiesRepository.findOne({
      where: {
        id
      }
    });

    if (company) {
      company.name = name;
      company.description = description;
      company.img_url = img_url;
      company.lat = lat;
      company.long = long;
      await companiesRepository.save(company);
      return company;
    } else {
      throw new _AppError.default('Company id do not exists');
    }
  }

}

var _default = UpdateCompanyService;
exports.default = _default;