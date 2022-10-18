import express from 'express'
import routes from './routes'
import { connection } from './database/connect'
import dotEnv from 'dotenv';

const PORT = process.env.PORT || 3000

async function start () {
  dotEnv.config();
  const server = express()
  server.use(express.json())
  server.use(routes)

  await connection.connect()
  
  server.listen(PORT, ()=>{
    console.log('servidor rodando na porta: ', PORT)
  })
}

start()