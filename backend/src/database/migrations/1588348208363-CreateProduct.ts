import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProduct1588348208363 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'orders_products',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'id_order',
						type: 'uuid',
					},
					{
						name: 'id_product',
						type: 'uuid',
						isNullable: true,
					},
					{
						name: 'value',
						type: 'numeric',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('orders_products');
	}
}
