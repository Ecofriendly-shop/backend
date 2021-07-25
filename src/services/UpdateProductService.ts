import { getRepository } from 'typeorm';

import AppError from 'errors/AppError';
import Product from 'models/Product';

interface Data {
  name: string;
  description: string;
  img_url: string;
  is_vegan: boolean;
  is_ecologic: boolean;
  have_lactose: boolean;
  have_gluten: boolean;
  bar_code: string;
  id: string;
}

class UpdateCompanyService {
  public async execute({
    name,
    description,
    img_url,
    have_gluten,
    have_lactose,
    is_ecologic,
    is_vegan,
    bar_code,
    id,
  }: Data): Promise<Product> {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne({
      where: { id },
    });

    if (product) {
      product.name = name;
      product.description = description;
      product.img_url = img_url;
      product.have_gluten = have_gluten;
      product.have_lactose = have_lactose;
      product.is_ecologic = is_ecologic;
      product.is_vegan = is_vegan;
      product.bar_code = bar_code;

      await productsRepository.save(product);

      return product;
    } else {
      throw new AppError('Company id do not exists');
    }
  }
}

export default UpdateCompanyService;
