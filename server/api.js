const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
    console.log('Hello World of Johan');
    res.send('<h1>Hello World of Johan</h1>');
});

module.exports = apiRouter;