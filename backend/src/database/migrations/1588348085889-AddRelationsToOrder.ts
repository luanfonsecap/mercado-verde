import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export default class AddRelationsToOrder1588348085889
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumns('orders', [
			new TableColumn({
				name: 'id_client',
				type: 'uuid',
				isNullable: true,
			}),
			new TableColumn({
				name: 'id_producer',
				type: 'uuid',
				isNullable: true,
			}),
		]);

		await queryRunner.createForeignKeys('orders', [
			new TableForeignKey({
				name: 'ClientIdOrder',
				columnNames: ['id_client'],
				referencedColumnNames: ['id'],
				referencedTableName: 'clients',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			}),
			new TableForeignKey({
				name: 'ProducerIdOrder',
				columnNames: ['id_producer'],
				referencedColumnNames: ['id'],
				referencedTableName: 'producers',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			}),
		]);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await Promise.all([
			queryRunner.dropForeignKey('orders', 'id_client'),
			queryRunner.dropForeignKey('orders', 'id_producer'),
		]);

		await Promise.all([
			queryRunner.dropColumn('orders', 'id_client'),
			queryRunner.dropColumn('orders', 'id_producer'),
		]);
	}
}
