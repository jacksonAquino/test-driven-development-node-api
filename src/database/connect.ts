import { MongoClient } from 'mongodb'

const host = process.env.DB_HOST || '172.19.0.2:27017'
const user = process.env.DB_USERNAME || 'root'
const password = process.env.DB_USERNAME || 'root'

const connection_config = `mongodb://${user}:${password}@${host}?authMechanism=DEFAULT`

export const connection = new MongoClient(connection_config);