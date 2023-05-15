import * as dotenv from 'dotenv';

const config = dotenv.config();

if (config.error) {
  throw config.error;
}

console.log(config.parsed);
