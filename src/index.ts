import express from 'express'
import dotenv from 'dotenv'
import { AppDataSource } from './data-source'
import authController from './controllers/authController'
import situationsController from './controllers/situationsController'

dotenv.config()

const app = express()

const port = process.env.PORT || 8080

app.use(express.json())

app.use('/login', authController)
app.use('/situations', situationsController)

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
