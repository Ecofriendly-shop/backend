import { Router } from 'express';
import companiesRoutes from './companies.routes';
import productsRoutes from './products.routes';

const routes = Router();

routes.use('/companies', companiesRoutes);
routes.use('/products', productsRoutes);

export default routes;
