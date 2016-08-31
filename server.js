var Hapi = require("hapi");
var http = require("http");
var requireHttps = require("hapi-require-https");

var host = "0.0.0.0";
var server = new Hapi.Server;
var servers = {};

servers.a = server.connection({
  host,
  labels: "a",
});

server.connection({
  host,
  labels: "b",
});

var plugins = [];

plugins.push(
  servers.a.register({
    register: requireHttps,
    options: {
      proxy: false,
    },
  })
);

Promise.all(plugins)
.then(function () {
  return server.start();
})
.then(function () {
  var info = servers.a.info;
  var url = `${info.protocol}://${info.host}:${info.port}/`;
  console.log(`Server A running on: ${url}`);
  http.request(url).end();
})
.catch(function (error) {
  console.log(error);
});
