import config from './config';

const APP_ENV = process.env.APP_ENV || 'local';
const config:config = require('./' + APP_ENV).default;

export default config;