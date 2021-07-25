import { Router } from 'express';
import ProductRepository from 'repositories/productsRepository';
import CreateProductService from 'services/CreateProductService';
import DeleteProductService from 'services/DeleteProductService';
import UpdateProductService from 'services/UpdateProductService';
import { getCustomRepository } from 'typeorm';

const productsRoutes = Router();

// CREATE
productsRoutes.post('/', async (req, res) => {
  try {
    const {
      name,
      bar_code,
      have_gluten,
      description,
      have_lactose,
      img_url,
      is_ecologic,
      is_vegan,
    } = req.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      bar_code,
      description,
      have_gluten,
      have_lactose,
      img_url,
      is_ecologic,
      is_vegan,
      name,
    });

    return res.json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// READ
productsRoutes.get('/', async (req, res) => {
  try {
    const { q, is_vegan, is_ecologic, have_gluten, have_lactose } = req.query;
    const productsRepository = getCustomRepository(ProductRepository);

    const products = await productsRepository.findByProductNameAndFilters({
      key_name: String(q),
      filters: {
        is_vegan:
          is_vegan === 'true' ? true : is_vegan === 'false' ? false : undefined,
        is_ecologic:
          is_ecologic === 'true'
            ? true
            : is_ecologic === 'false'
            ? false
            : undefined,
        have_gluten:
          have_gluten === 'true'
            ? true
            : have_gluten === 'false'
            ? false
            : undefined,
        have_lactose:
          have_lactose === 'true'
            ? true
            : have_lactose === 'false'
            ? false
            : undefined,
      },
    });

    return res.json(products);

    // const products = await productsRepository.find();

    // return res.json(products);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// UPDATE
productsRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      bar_code,
      have_gluten,
      description,
      have_lactose,
      img_url,
      is_ecologic,
      is_vegan,
    } = req.body;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute({
      id,
      bar_code,
      is_vegan,
      is_ecologic,
      have_lactose,
      name,
      img_url,
      description,
      have_gluten,
    });

    return res.json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// DELETE
productsRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProductService = new DeleteProductService();

    await deleteProductService.execute({ id });

    return res.json({ message: 'successfully deleted' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default productsRoutes;
