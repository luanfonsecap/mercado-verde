import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateClients1588347782004 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'clients',
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
						name: 'email',
						type: 'varchar',
					},
					{
						name: 'telephone',
						type: 'integer',
					},
					{
						name: 'zipcode',
						type: 'integer',
					},
					{
						name: 'street',
						type: 'varchar',
					},
					{
						name: 'number',
						type: 'integer',
					},
					{
						name: 'city',
						type: 'varchar',
					},
					{
						name: 'uf',
						type: 'varchar',
						length: '2',
					},
					{
						name: 'password',
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
		await queryRunner.dropTable('clients');
	}
}
