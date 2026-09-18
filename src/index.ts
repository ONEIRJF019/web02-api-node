import express from 'express'
import dotenv from 'dotenv'
import { AppDataSource } from './data-source'
import login from './controllers/login'

dotenv.config()

const app = express()

const port = process.env.PORT || 8080

app.use('/login', login)

AppDataSource.initialize()
  .then(() => {
    console.log('Conexão com o banco de dados realizado com sucesso')
  })
  .catch((error) => {
    console.log('Erro na conexão com o banco de dados', error)
  })

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port} http://localhost:${port}`)
})
