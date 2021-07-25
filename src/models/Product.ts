import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  is_vegan: boolean;

  @Column()
  is_ecologic: boolean;

  @Column()
  have_lactose: boolean;

  @Column()
  have_gluten: boolean;

  @Column()
  img_url: string;

  @Column()
  bar_code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
