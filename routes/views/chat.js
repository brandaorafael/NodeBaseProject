module.exports = function (path){

  return function(router){
    router.get("/", function(req, res){
    	res.sendFile(path.resolve('public/views/home.html'));
    });
  }

}