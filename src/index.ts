import express, { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import { logger } from './utils/logger'
import knexInstance from './utils/knex'
import bodyParser from 'body-parser'
import specs from './utils/swagger'
import { Model } from 'objection'
import { routes } from './routes'
import cors from 'cors'

const app: Application = express()
const port: number = 3001

// instance knex
Model.knex(knexInstance)

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handler
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

// documentation swagger
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

routes(app)

app.listen(port, () => {
  logger.info(`Server is listening on url http://localhost:${port}`)
})
