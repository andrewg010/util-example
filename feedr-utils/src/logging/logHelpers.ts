import rTracer from 'cls-rtracer'
import { format } from 'winston'

const withRequestId = format.printf((info) => {
  const requestId = rTracer.id() || 'Not a request'
  const message = info.reduce((acc: string, item: unknown) => {
    let rtn = item
    if (typeof item === 'function') return acc
    if (typeof item === 'object') {
      rtn = JSON.stringify(item)
    }
    if (acc === '') return rtn
    return `${acc}, ${rtn}` 
  }, '')
  return `${new Date().toISOString()} (${requestId}) - [ ${message} ] { level: ${info.level} }`
})

export const getLogFormat = () => format.combine(
  withRequestId,
)
