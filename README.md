# Utils-Example

## How to use

- Clone this repository
- Navigate to the root of this repository
- `cd example`
- `npm i`
- `npm start`

### feedr-utils directory

The package code for reference

### example directory

Example of a project that uses feedr-utils package

## Features

- Strongly typed
- Importing any of the utils will start an express server listening on `process.env.PORT`
- Call `routing.getExpressApp` or `routing.getExpressRouter` to gain access to these objects and customise the server and middleware in any way you like.
- Request logging with `morgan` is set up automatically for consistency across services.
- Import `logger` and call `logger.info, debug, error` etc to explicitly state that something should be logged. Logger format is then consistent across services (can be used without express).
- Console functions (log, debug etc) will automatically be sent to logger if left in the code base.
- Import `meta` to consistently call information about the environment across services (can be used without express).
- import `dispatch` to get the custom handler function used in `feedr-api` (Which can be fully typed by importing `{ DispatchHandler } from 'feedr-utils/dispatchHandler`).

You can also access elements without spinning up express for example `import logger from 'feedr-utils/logging'`.

### Empty files - these have potential to be added
- Standard test setup `feedr-utils/testing`.
- feedr .eslintrc which can be extended `feedr-utils/defaults/.eslintrc`.
- feedr tsconfig which can be extended `feedr-utils/defaults/tsconfig.json`.

### Other possibilities
- Commonly shared middleware such as auth.
