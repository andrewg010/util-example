import logger from '../logging'
import { Response, Request } from 'express'
import {
  ErrorFn,
  errorFn,
  HandlerErrorResult,
  HandlerResult,
  payloadFn,
  PayloadFn,
  sendResponse,
} from './handlerFunctions'

export type DispatchHandler<
  ReqParams = any,
  ResBody = any,
  ReqBody = any,
  ReqQuery = any,
> = (
  req: Request<ReqParams, ResBody, ReqBody, ReqQuery>,
  res: Response,
  payload: PayloadFn,
  error: ErrorFn,
) => Promise<HandlerResult | HandlerErrorResult>

export default (handler: DispatchHandler) => async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const { payload, status, success } = await handler(
      request,
      response,
      payloadFn,
      errorFn,
    )
    if (!response) return
    sendResponse(response, status, { status, success, payload })
  } catch (err) {
    logger.error('Unknown Error', err)
    return sendResponse(response, 500, null)
  }
}
