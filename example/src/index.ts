import { logger, meta, routing } from 'feedr-utils'
import someRoutes from './someRoutes'

const app = routing.getExpressApp()

app.use((req, __, next) => {
  req.customRequestProperty = 'Custom Request property'
  console.log('we can add any middleware we like to customise the setup')
  next()
})

if (meta.env() === 'development') {
  console.log('this is development')
}

app.get('/test', (_, res) => {
  console.log('this console.log will automatically be directed to logger.log')
  logger.info('/ route called')
  res.send('hello')
})

app.get('*', someRoutes)
