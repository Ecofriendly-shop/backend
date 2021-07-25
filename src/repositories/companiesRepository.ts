import Company from 'models/Company';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Company)
class CompanyRepository extends Repository<Company> {}

export default CompanyRepository;
