import morgan from 'morgan'
import logger from './logger'

const requestLogger = morgan('combined', {
  stream: {
    write: (message: string): void => { constructRequestLog(message) },
  },
})

const constructRequestLog = (message: string): void => {
  logger.info(message)
}

export default requestLogger
