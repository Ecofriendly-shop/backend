import { getRepository } from 'typeorm';

import Company from 'models/Company';
import AppError from 'errors/AppError';

interface Data {
  name: string;
  lat: number;
  long: number;
  description: string;
  img_url: string;
  id: string;
}

class UpdateCompanyService {
  public async execute({
    name,
    description,
    img_url,
    lat,
    long,
    id,
  }: Data): Promise<Company> {
    const companiesRepository = getRepository(Company);

    const company = await companiesRepository.findOne({
      where: { id },
    });

    if (company) {
      company.name = name;
      company.description = description;
      company.img_url = img_url;
      company.lat = lat;
      company.long = long;

      await companiesRepository.save(company);

      return company;
    } else {
      throw new AppError('Company id do not exists');
    }
  }
}

export default UpdateCompanyService;
