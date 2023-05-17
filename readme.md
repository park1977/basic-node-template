## Reference 

https://github.com/janishar/nodejs-backend-architecture-typescript


## nodejs modules 

https://nodejs.org/api/packages.html#determining-module-system

Files with an .mjs extension.

Files with a .js extension when the nearest parent package.json file contains a top-level "type" field with a value of "module".

## env file 

.env sample: 

``` env
 # Environment Name
NODE_ENV=development

# Server listen to this port
PORT=3000

#Cors
CORS_URL=*

# Databse
DB_NAME=db
DB_MIN_POOL_SIZE=2
DB_MAX_POOL_SIZE=5
DB_HOST=mongo
DB_PORT=27017
```

## Logging 

https://github.com/winstonjs/winston/blob/master/examples/quick-start.js

set timer! 

``` javascript
const profiler = logger.startTimer();
setTimeout(function () {
  profiler.done({ message: 'Logging message' });
}, 1000);
```

## Jest

```commandline
npm run test
```