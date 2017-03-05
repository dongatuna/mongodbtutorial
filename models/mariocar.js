const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model

const MarioCharSchema = new Schema({
	name:String,
	weight:Number
});

//mariochar is going to be the collection name in the database
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports=MarioChar;
