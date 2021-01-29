import { dispatch, routing } from 'feedr-utils'

import * as routeHandler from './handler'

const router = routing.getExpressRouter()

router.get('/', dispatch(routeHandler.routeHandler))

export default router
