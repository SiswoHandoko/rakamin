const express = require('express');
const app = express();

const newRouter = require('./router_module.js');

app.use('/things',newRouter);

app.listen(3001)