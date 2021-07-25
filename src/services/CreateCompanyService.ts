import { getRepository } from 'typeorm';

import Company from 'models/Company';
import AppError from 'errors/AppError';

interface Data {
  name: string;
  lat: number;
  long: number;
  description: string;
  img_url: string;
}

class CreateCompanyService {
  public async execute({
    name,
    description,
    img_url,
    lat,
    long,
  }: Data): Promise<Company> {
    const companiesRepository = getRepository(Company);

    const checkIfCompanyExists = await companiesRepository.findOne({
      where: {
        lat,
        long,
      },
    });

    if (checkIfCompanyExists) {
      throw new AppError(
        'A company with the same longitude and latitude already exists',
      );
    }

    const company = companiesRepository.create({
      name,
      description,
      img_url,
      lat,
      long,
    });

    await companiesRepository.save(company);

    return company;
  }
}

export default CreateCompanyService;
