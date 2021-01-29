export default () => {
  switch (process.env.APP_ENV) {
    case 'production':
      return 'production'
    case 'testing':
      return 'testing'
    case 'staging':
      return 'staging'
    case 'test':
      return 'test'
    default:
      return 'development'
  }
}