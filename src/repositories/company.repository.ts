import { Db } from 'mongodb'
import { connection } from '../database/connect'

export interface ICompanyRepository {
  get_companies_qtd(): Promise<number>
}

export class CompanyRepository implements ICompanyRepository {
  private client: Db
  constructor(){
    this.client = connection.db('tdd')
  }
  async get_companies_qtd(): Promise<number> {
    const companies_qtd = await this.client.collection('companies').countDocuments()
    return companies_qtd
  }
}