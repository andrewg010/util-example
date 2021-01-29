import { DispatchHandler } from 'feedr-utils/dispatchHandler'
import { BAD_REQUEST, ERROR } from 'feedr-utils/errors'

type ReqParams = {
  hello?: string
  goodbye?: string
}

export const routeHandler: DispatchHandler<ReqParams> = (req, _, payload, error) => {
  const { params, customRequestProperty } = req

  console.log(customRequestProperty)

  if (!params.hello) {
    return error(ERROR(400, '400', 'hello is needed'))
  }

  if (!params.goodbye) {
    return error(BAD_REQUEST)
  }

  return payload('Good job, you passed the test!')
}
