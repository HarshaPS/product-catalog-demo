
import express from 'express';
import mongoClient from './src/client/MongoClient';

const app = express();

const server = app.listen("8080", () => {
    console.log('Product Catalog API started on port ' + 8080);
});

module.exports = server;
