var GetRoutes = {};
var PostRoutes = {};
var PutRoutes = {};
var DelRoutes = {};


exports.route = function (route) {
  for (var path in GetRoutes) {
    route.get(path, GetRoutes[path]);
  }
}


GetRoutes['/Hello'] = function (req,res,next) {
  var name = req.query.name;
  res.send(`Hello  ${name}`);
}