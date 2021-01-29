import { Response } from 'express'
import { ApiError } from '../errors'

export interface HandlerResult {
  payload: unknown
  status: number,
  success: boolean
  paging: Record<string, unknown> 
}

export interface HandlerErrorResult extends HandlerResult {
  payload: {
    status: number,
    errorMessage: string,
  }
}

export type PayloadFn = (data: unknown, status?: number) => Promise<HandlerResult>
export const payloadFn: PayloadFn = async (data, status = 200) => ({
  payload: data,
  paging: {},
  status,
  success: status >= 200 && status < 300,
})

export type ErrorFn = (error: ApiError) => Promise<HandlerErrorResult>
export const errorFn: ErrorFn = async (error) => {
  let result = {
    payload: {
      status: 400,
      errorMessage: '',
    },
    paging: {},
    status: 400,
    success: false,
  }

  const { httpCode, errorCode, errorMessage } = error

  if (!httpCode && !errorMessage && !errorCode) {
    try {
      const message = JSON.stringify(error)
      result.payload.errorMessage = message
      return result
    } catch (err) {
      result = { 
        ...result,
        payload: {
          status: 500,
          errorMessage: 'handlerFunctions errorFn error stringifying :(',
        },
        status: 500,
      }
    }
  }

  result = { 
    ...result,
    payload: {
      status: httpCode,
      errorMessage,
    },
    status: httpCode,
  }
  return result
}

type SendResponseFn = (res: Response, status: number, data: unknown) => void
export const sendResponse: SendResponseFn = (res, status, data) => {
  res
    .set('Content-Type', 'application/json')
    .status(status)
    .send(data)
}
