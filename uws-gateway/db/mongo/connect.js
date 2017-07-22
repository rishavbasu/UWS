var mongoose = require('mongoose');
var connection;
try {
	connection = mongoose.createConnection("mongodb://cpinaki:cpinaki@ds139969.mlab.com:39969/mongodbpinaki");
} catch (e) {
	console.log("Unable to connect the database. Please check the details.");
}

module.exports = connection;