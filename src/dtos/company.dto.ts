import { ObjectId } from 'mongodb'
export interface CompanyDto {
  _id?: ObjectId
  fantasy_name: string
  cnpj: string
  phones: Array<string>
}