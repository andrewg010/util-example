export type ApiError = {
  httpCode: number
  errorCode: string
  errorMessage: string
}

export const ERROR = (httpCode: number, errorCode: string, errorMessage: string): ApiError => ({
  httpCode,
  errorCode,
  errorMessage,
})

export const INTERNAL_SERVER_ERROR: ApiError = {
  httpCode: 500,
  errorCode: '500.0',
  errorMessage: 'Internal server error',
}

export const BAD_REQUEST: ApiError = {
  httpCode: 400,
  errorCode: '400.0',
  errorMessage: 'Invalid request (unspecified reason)',
}
