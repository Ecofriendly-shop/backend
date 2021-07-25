"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateCompany1627198330505 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'companies',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'lat',
        type: 'real'
      }, {
        name: 'long',
        type: 'real'
      }, {
        name: 'description',
        type: 'varchar'
      }, {
        name: 'img_url',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('companies');
  }

}

exports.default = CreateCompany1627198330505;