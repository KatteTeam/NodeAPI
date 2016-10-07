const restify = require('restify');
const router = require('./router');

const server = restify.createServer();

server.use(restify.queryParser());

//加載接口路由
router.route(server);

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});