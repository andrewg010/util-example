import logger from '../logging'

const originalConsoleLog = console.log
console.log = (...args: unknown[]): void => {
  originalConsoleLog.apply(this, args)
  logger.info(args)
}

const originalConsoleError = console.error
console.error = (...args: unknown[]): void => {
  originalConsoleError.apply(this, args)
  logger.error(args)
}

const originalConsoleInfo = console.info
console.info = (...args: unknown[]): void => {
  originalConsoleInfo.apply(this, args)
  logger.info(args)
}

const originalConsoleDebug = console.debug
console.error = (...args: unknown[]) => {
  originalConsoleDebug.apply(this, args)
  logger.error(args)
}
