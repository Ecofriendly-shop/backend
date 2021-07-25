"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateProduct1627209968112 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'products',
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
        name: 'description',
        type: 'varchar'
      }, {
        name: 'img_url',
        type: 'varchar'
      }, {
        name: 'is_vegan',
        type: 'boolean'
      }, {
        name: 'is_ecologic',
        type: 'boolean'
      }, {
        name: 'have_lactose',
        type: 'boolean'
      }, {
        name: 'have_gluten',
        type: 'boolean'
      }, {
        name: 'bar_code',
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
    await queryRunner.dropTable('products');
  }

}

exports.default = CreateProduct1627209968112;