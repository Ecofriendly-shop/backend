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
}

class CreateProductService {
  public async execute({
    name,
    description,
    img_url,
    have_gluten,
    have_lactose,
    is_ecologic,
    is_vegan,
    bar_code,
  }: Data): Promise<Product> {
    const productsRepository = getRepository(Product);

    const checkIfProductExists = await productsRepository.findOne({
      where: {
        bar_code,
      },
    });

    if (checkIfProductExists) {
      throw new AppError('A product with the same bar code already exists');
    }

    const product = productsRepository.create({
      name,
      bar_code,
      have_gluten,
      description,
      have_lactose,
      img_url,
      is_ecologic,
      is_vegan,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
