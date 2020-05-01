import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProducts1588348991921 implements MigrationInterface {
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
						name: 'id_producer',
						type: 'uuid',
						isNullable: true,
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'quantity',
						type: 'numeric',
					},
					{
						name: 'type_sell',
						type: 'varchar',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('products');
	}
}
