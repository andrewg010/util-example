import mongoLogger from './mongoLogger'
import logger from './logger'

export default { warn: logger.warn, info: logger.info, debug: logger.debug, error: logger.error } 

export { mongoLogger }
