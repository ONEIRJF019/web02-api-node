import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import { Situations } from './entity/Situations'
import { Users } from './entity/Users'

dotenv.config()

const dbDialect = process.env.DB_DIALECT || 'mysql'

export const AppDataSource = new DataSource({
  type: dbDialect as any,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: [Situations, Users],
  migrations: [__dirname + '/migration/*.js'],
})
