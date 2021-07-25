import { getRepository } from 'typeorm';

import AppError from 'errors/AppError';
import Product from 'models/Product';

interface Data {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: Data): Promise<void> {
    const productsRepository = getRepository(Product);

    const product = await productsRepository.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      throw new AppError('Product id do not exists');
    }

    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
