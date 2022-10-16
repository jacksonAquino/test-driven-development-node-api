import { connection } from '../database/connect'
import { Db } from 'mongodb'

export interface IBaseRepository {
  client: Db
}

export class BaseRepository implements IBaseRepository {
  client = connection.db('tdd')
}