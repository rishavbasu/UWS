var express = require('express');
var app = express();

var server = app.listen(7000, function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Example app listening at http://%s:%s", host, port);
});

var Router = require("./routes/router");
app.use("/", Router);

app.use(express.static('public'));



































//magic of javascript functions
var func_multiply = new Function("arg1", "arg2", "return arg1 * arg2;");
console.log("Function called :- "+func_multiply(5,10));

//CALLBACK - FUNCTIONS
/**
 * It might seem silly to go through all that trouble when the value could 
 * just be returned normally, but there are situations where that’s impractical 
 * and callbacks are necessary.
 * **/
function some_function(arg1, arg2, callback) {
  var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
  callback(my_number);
}
some_function(5, 15, function(num) {
//  console.log("callback called! " + num);
});























/*app.get('/index.htm', function(req, res) {
	console.log(__dirname + "\\views\\" + "resHtml.html");
	res.sendFile(__dirname + "\\views\\" + "resHtml.ejs");
});

app.post('/', function(req, res) {
	console.log("Got a POST request for the homepage");
	res.send('Hello POST');
});

app.get('/list_user', function(req, res) {
	console.log("Got a GET request for /list_user");
	res.send('Page Listing');
});

app.get('/ab*cd', function(req, res) {
	console.log("Got a GET request for /ab*cd");
	res.send('Page Pattern Match');
});*/
