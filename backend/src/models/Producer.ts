import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('producers')
class Producer {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	telephone: number;

	@Column()
	tax: number;

	@Column()
	city: string;

	@Column()
	password: string;

	@Column()
	likes: number;

	@Column({
		type: 'geometry',
		spatialFeatureType: 'Point',
		srid: 4326,
	})
	location: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Producer;
