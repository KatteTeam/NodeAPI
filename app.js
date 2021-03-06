﻿const restify = require('restify');
const compression = require('compression');
const router = require('./router');

const server = restify.createServer();

server.use(restify.queryParser());
server.use(compression());
//加載接口路由
router.route(server);

server.listen(3000, () => {
  console.log("%s listening at %s", server.name, server.url);
});