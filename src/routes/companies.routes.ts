import AppError from 'errors/AppError';
import { NextFunction, Request, Response, Router } from 'express';
import CompanyRepository from 'repositories/companiesRepository';
import CreateCompanyService from 'services/CreateCompanyService';
import DeleteCompanyService from 'services/DeleteCompany';
import UpdateCompanyService from 'services/UpdateCompany';
import { getCustomRepository } from 'typeorm';

const companiesRoutes = Router();

// CREATE
companiesRoutes.post('/', async (req, res, next) => {
  try {
    const { name, description, img_url, lat, long } = req.body;

    const createCompany = new CreateCompanyService();

    const company = await createCompany.execute({
      name,
      description,
      img_url,
      lat,
      long,
    });

    return res.json(company);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// READ
companiesRoutes.get('/', async (req, res) => {
  try {
    const companiesRepository = getCustomRepository(CompanyRepository);

    const companies = await companiesRepository.find();

    return res.json(companies);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// UPDATE
companiesRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, lat, long, img_url } = req.body;
    const updateCompany = new UpdateCompanyService();

    const company = await updateCompany.execute({
      description,
      name,
      lat,
      long,
      id,
      img_url,
    });

    return res.json(company);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// DELETE
companiesRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCompany = new DeleteCompanyService();

    await deleteCompany.execute({
      id,
    });

    return res.json({ message: 'successfully deleted' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default companiesRoutes;
