import routing from './routing'
import logger from './logging'
import meta from './meta'
import * as errors from './errors'
import dispatch from './dispatchHandler'
import './console'

const app = routing.getExpressApp()

const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Server listening on port ${port}`))
}

export {
  logger,
  meta,
  routing,
  errors,
  dispatch,
}
