import compression from 'compression'
import cors from 'cors'
import { Application, json, urlencoded } from 'express'
import { static as expressStatic } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { logger } from '../utils'

export async function applyMiddlewares(app: Application): Promise<void> {
  const NODE_ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production'

  app.use(urlencoded({ extended: true }))
  app.use(compression())
  app.use(helmet())
  app.use(cors())
  app.use(json())
  app.set('x-powered-by', false)
  app.disable('x-powered-by')
  app.set('trust proxy', 'loopback')
  app.set('env', NODE_ENV)
  app.use('/static', expressStatic('static'))

  NODE_ENV === 'development' && app.use(morgan('dev'))

  logger.info('[ MODULE ] Middlewares configured and ready.')
}
