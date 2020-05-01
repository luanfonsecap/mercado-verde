import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AddRelationsToProducts1588349368275
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createForeignKey(
			'products',
			new TableForeignKey({
				name: 'ProducerIdProduct',
				columnNames: ['id_producer'],
				referencedColumnNames: ['id'],
				referencedTableName: 'producers',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('products', 'id_producer');
	}
}
