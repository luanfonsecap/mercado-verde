import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddLocationFieldToProducers1588516871614
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'producers',
			new TableColumn({
				name: 'location',
				type: 'geometry',
				srid: 4326,
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('producers', 'location');
	}
}
