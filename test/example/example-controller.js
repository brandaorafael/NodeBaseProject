module.exports = function(server, chai){

	describe('Test example', function () {
		this.timeout(15000);

		describe('GET example', function() {

			it('it should receive a 200', function(done) {
				chai.request(server)
				.get('/v1/example')
				.end(function(err, res){
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
			});
		});
	})
}