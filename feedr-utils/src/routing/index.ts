import express from 'express'
import applyMiddleware from './applyMiddleware'

const app = express()
applyMiddleware(app)

export const getExpressApp = (): express.Application => app
export const getExpressRouter = (): express.Router => express.Router()

export default {
  getExpressApp,
  getExpressRouter,
}
