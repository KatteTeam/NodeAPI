const music = require('./controller/music.js');

let GetRoutes = {};
let PostRoutes = {};
let PutRoutes = {};
let DelRoutes = {};


exports.route = (route) => {
  for (let path in GetRoutes) {
    route.get(path, GetRoutes[path]);
  }

  for (let path in PostRoutes) {
    route.post(path, PostRoutes[path]);
  }

  for (let path in PutRoutes) {
    route.put(path, PutRoutes[path]);
  }

  for (let path in DelRoutes) {
    route.delete(path, DelRoutes[path]);
  }
}


GetRoutes['/api/Music'] = music.getMusicById; //scott御用接口