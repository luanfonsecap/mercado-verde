import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class AddRelationsToOrderProducts1588350629442
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createForeignKeys('orders_products', [
			new TableForeignKey({
				name: 'IdOrder',
				columnNames: ['id_order'],
				referencedColumnNames: ['id'],
				referencedTableName: 'orders',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			}),
			new TableForeignKey({
				name: 'IdProduct',
				columnNames: ['id_product'],
				referencedColumnNames: ['id'],
				referencedTableName: 'products',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			}),
		]);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await Promise.all([
			queryRunner.dropForeignKey('order_products', 'IdOrder'),
			queryRunner.dropForeignKey('order_products', 'IdProduct'),
		]);
	}
}
