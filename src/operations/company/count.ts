import { ICompanyRepository, CompanyRepository } from "@repositories/company.repository";

export class CountOperation {
  constructor(
    private companyRepository: ICompanyRepository = new CompanyRepository()
  ){}
  async execute(){
    const companyCreated = await this.companyRepository.get_companies_qtd()
    return companyCreated
  }
}