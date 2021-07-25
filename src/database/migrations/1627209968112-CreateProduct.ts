import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProduct1627209968112 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'img_url',
            type: 'varchar',
          },
          {
            name: 'is_vegan',
            type: 'boolean',
          },
          {
            name: 'is_ecologic',
            type: 'boolean',
          },
          {
            name: 'have_lactose',
            type: 'boolean',
          },
          {
            name: 'have_gluten',
            type: 'boolean',
          },
          {
            name: 'bar_code',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
