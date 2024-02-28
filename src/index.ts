import deserializeToken from './middleware/deserializeToken'
import express, { Application } from 'express'
import swaggerUi from 'swagger-ui-express'
import { logger } from './utils/logger'
import knexInstance from './database'
import bodyParser from 'body-parser'
import specs from './utils/swagger'
import { Model } from 'objection'
import { routes } from './routes'
import * as dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
dotenv.config()

const app: Application = express()
const port = process.env.PORT || 3000

// instance knex
Model.knex(knexInstance)

// parse body request
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// image static
app.use('/images', express.static(path.join(__dirname, 'images')))

// cors access handler
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.use(deserializeToken)

// documentation swagger
app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(specs))

routes(app)

app.listen(port, () => {
  logger.info(`Server is listening on url http://localhost:${port}`)
})
