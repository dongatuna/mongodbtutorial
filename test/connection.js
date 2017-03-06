const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the db before the tests are run
before(function(done){
	//Connect to mongodb
	mongoose.connect("mongodb://localhost/testaroo");

	//listen when connection is successfully made
	mongoose.connection.once('open', function(){
		console.log("Connection has been made, now make fireworks...");
		done();

	}).on('error', function(error){
		console.log("Connection error:", error);
	});

});

//Drop the characters collections before each test
beforeEach(function(done){
	//drop the collection
	mongoose.connection.collections.mariochars.drop(function(){
		done();
	});
	
});