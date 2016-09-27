var music = require('./controller/music.js');

var GetRoutes = {};
var PostRoutes = {};
var PutRoutes = {};
var DelRoutes = {};


exports.route = function (route) {
  for (var path in GetRoutes) {
    route.get(path, GetRoutes[path]);
  }

  for (var path in PostRoutes) {
    route.post(path, PostRoutes[path]);
  }

  for (var path in PutRoutes) {
    route.put(path, PutRoutes[path]);
  }

  for (var path in DelRoutes) {
    route.delete(path, DelRoutes[path]);
  }

}


GetRoutes['/api/Music'] = music.getMusicById; //scott御用接口