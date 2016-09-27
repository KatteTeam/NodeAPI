var restify = require('restify');
var router = require('./router');

var server = restify.createServer();

server.use(restify.queryParser());

//加載接口路由
router.route(server);

server.listen(8080,function(){
  console.log("%s listening at %s",server.name,server.url);
});