import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import rTracer from 'cls-rtracer'
import requestLogger from '../logging/requestLogger'

export default (app: express.Application): void => {
  app.use(helmet())
  app.use(rTracer.expressMiddleware())
  app.use(express.json())
  app.use(express.text())
  app.use(cookieParser())

  app.use(requestLogger)
}