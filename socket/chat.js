module.exports = function(io){

	io.on('connection', function(socket){

	  	socket.on('message', function(msg){
	    	io.emit('message', msg);
	  	});

	});
}