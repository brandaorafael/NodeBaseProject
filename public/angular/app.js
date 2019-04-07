angular.module('chat', [])

.controller("appController", ["$rootScope", function($rootScope){
	var appCtrl = this;

	$rootScope.viewFlag = 1;

}])

.directive('message', ["$rootScope",
  function($rootScope) {
	  return {
	  	restrict: 'E',
	  	link: function($scope){
	  		var socket = io.connect('http://localhost:3000');

	  		var aux = 0;

	  		$scope.sendMessage = function(){
	  			socket.emit('message', {name: $rootScope.name, msg: $scope.message});
	  			$scope.message = '';
	  		}

	  		socket.on('message', function(msg){
	  			msg.msg = msg.msg.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		        $('#messages').append($('<li>').html("<strong id='"+ aux + "'>" + msg.name + '</strong>: ' + msg.msg));
		        $("#" + aux)[0].scrollIntoView();
		        aux++;
		    });
	  	},
	    templateUrl: 'views/message.html'
	  };
	}
])

.directive('login', ["$rootScope",
  function($rootScope) {
	  return {
	  	restrict: 'E',
	  	link: function($scope){

	  		$scope.login = function(){
	  			$rootScope.name = $scope.name;

	  			$rootScope.viewFlag = 2;
	  		}
	  	},
	    templateUrl: 'views/login.html'
	  };
	}
])