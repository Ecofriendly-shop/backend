import { getRepository } from 'typeorm';

import Company from 'models/Company';
import AppError from 'errors/AppError';

interface Data {
  id: string;
}

class DeleteCompanyService {
  public async execute({ id }: Data): Promise<void> {
    const companiesRepository = getRepository(Company);

    const companie = await companiesRepository.findOne({
      where: {
        id,
      },
    });

    if (!companie) {
      throw new AppError('Company id do not exists');
    }

    await companiesRepository.remove(companie);
  }
}

export default DeleteCompanyService;
