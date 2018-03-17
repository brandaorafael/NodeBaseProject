module.exports = function(modules){

	//Teste
	var teste = {};
	teste.controllers = {};
	teste.controllers.teste = require(__dirname + '/modules/teste/teste-controller.js')();

	//Rotas
	var routes = {};
	routes.routes = require(__dirname + '/routes/router.js')(modules.express, routes);
	routes.v1 = {};
	routes.v1.teste = require(__dirname + '/routes/v1/teste.js')(teste);

	return routes.routes;

}