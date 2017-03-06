//require mocha
//const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

//Describe contains a set of individual test will be contained within the describe block
describe('Saving records', function () {

    //create test --one single test
    it('Saves a record to the database', function (done) {
        var char = new MarioChar({
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

});