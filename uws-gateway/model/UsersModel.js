/*var mongoose = require('mongoose');
var connection = require('../db/mongo/connect');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	id : {type : String},
	uid : {type : String, required : true, unique : true},
	pswd : {type : String, required : true, unique : true}
}, {
	collection : 'Users',
	versionKey : false
});

var UserModel = connection.model('Users', UserSchema);

//module.exports = UserModel;

var Todo = mongoose.model('Users', {
    uid : String,
    pswd : String
});*/