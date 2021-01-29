import logger from './logger'

const mongoLogger = (coll: string, method: string, query: string, doc: string): void => {
  const logString = `${coll} ${method} ${JSON.stringify(query)} ${JSON.stringify(doc)}`
  logger.info(logString)
}

export default mongoLogger
