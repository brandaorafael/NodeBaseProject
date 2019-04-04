var app = require(__dirname + '/../app.js');
var server = app.server;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

console.log("TESTE!!");

require(__dirname + '/example/example-controller.js')(server, chai);