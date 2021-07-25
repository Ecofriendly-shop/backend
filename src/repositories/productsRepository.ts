import Product from 'models/Product';
import { EntityRepository, ILike, Repository } from 'typeorm';

interface Data {
  key_name: string;
  filters?: {
    have_gluten?: boolean;
    have_lactose?: boolean;
    is_ecologic?: boolean;
    is_vegan?: boolean;
  };
}
@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  public async findByProductNameAndFilters({
    key_name,
    filters,
  }: Data): Promise<Product[] | null> {
    const query = {};

    Object.assign(
      query,
      key_name !== 'undefined' && {
        name: ILike(`%${key_name.toLowerCase()}%`),
      },
      filters?.have_gluten !== undefined && {
        have_gluten: filters.have_gluten,
      },
      filters?.have_lactose !== undefined && {
        have_lactose: filters?.have_lactose,
      },
      filters?.is_ecologic !== undefined && {
        is_ecologic: filters?.is_ecologic,
      },
      filters?.is_vegan !== undefined && {
        is_vegan: filters?.is_vegan,
      },
    );

    const findProducts = await this.find({
      where: query,
    });

    return findProducts;
  }

  public async findByClassification() {}
}

export default ProductRepository;
