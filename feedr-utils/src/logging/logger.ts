import winston from 'winston'
import { getLogFormat } from './logHelpers'

const logger = winston.createLogger({
  format: getLogFormat(),
  silent: process.env.SILENT_LOGS === 'true',
  transports: new winston.transports.Console()
})

const log = (level: string, args: unknown[]): void => {
  logger.log(level, args)
}

const warn =  (...args: unknown[]): void => { log('warn', args) }
const info = (...args: unknown[]): void => { log('info', args) }
const debug = (...args: unknown[]): void => { log('debug', args) }
const error = (...args: unknown[]): void => { log('error', args) }

export default { warn, info, debug, error } 

export { warn, info, debug, error }