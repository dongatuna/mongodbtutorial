const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe contains a set of individual test will be contained within the describe block
describe('Deleting records', function () {

	var char; //make 

	beforeEach(function(done){

		char = new MarioChar({
        	name: "Mario",
        	weight: 25
        });

        //the save method is asynchronous.  Attach then to wait for the save to complete
        //the save method is used on a single instance
        char.save().then(function(){
        	//isNew method is for an object that has NOT been saved in the database
        	//if an object is saved in a db, isNew returns false
        	assert(char.isNew===false);
        	done();//lets mocha know where testing should be done
        });

	});

    //create test --one single test
    it('Deletes one record from the database', function (done) {
       
     	MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
     		MarioChar.findOne({name:'Mario'}).then(function(result){
     			assert(result===null); //if assert evaluates true, the test is passed
     			done();
     		})
     	})
    });

    
});