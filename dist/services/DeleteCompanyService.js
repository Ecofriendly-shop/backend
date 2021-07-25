"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Company = _interopRequireDefault(require("../models/Company"));

var _AppError = _interopRequireDefault(require("../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteCompanyService {
  async execute({
    id
  }) {
    const companiesRepository = (0, _typeorm.getRepository)(_Company.default);
    const companie = await companiesRepository.findOne({
      where: {
        id
      }
    });

    if (!companie) {
      throw new _AppError.default('Company id do not exists');
    }

    await companiesRepository.remove(companie);
  }

}

var _default = DeleteCompanyService;
exports.default = _default;