import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ChangeTypeNumericToInt1588361228887
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.changeColumn(
			'products',
			'quantity',
			new TableColumn({
				name: 'quantity',
				type: 'integer',
			}),
		);

		await queryRunner.changeColumn(
			'producers',
			'likes',
			new TableColumn({
				name: 'likes',
				type: 'integer',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.changeColumn(
			'products',
			'quantity',
			new TableColumn({
				name: 'quantity',
				type: 'numeric',
			}),
		);

		await queryRunner.changeColumn(
			'producers',
			'likes',
			new TableColumn({
				name: 'likes',
				type: 'numeric',
			}),
		);
	}
}
