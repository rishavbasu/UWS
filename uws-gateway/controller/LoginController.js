var path = require('path');
var express = require('express');

var request = require('request');
var async = require('async');

var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json());

var UsersModel = require('../model/UsersModel');

function callAccountService(callback){
	var url = "http://localhost:8000/account/test";
	request(url, function(err, response, body) {
		if (err) {
			console.log(err);
			callback(true);
			return;
		}
		console.log("Return from account :- "+body);
		var val = body;
		callback(false, val);
	});
}

function callNotificationService(callback){
	var url = "http://localhost:8000/notification/test";
	request(url, function(err, response, body) {
		if (err) {
			console.log(err);
			callback(true);
			return;
		}
		console.log("Return from notification :- "+body);
		var val = body;
		callback(false, val);
	});
}

router.post('/validate', function(req, res, next) {

	console.log("Login Validation.");
	
	async.parallel([callAccountService, callNotificationService], function(err, results){
		if (err) {
			console.log(err);
			return;
		}
		console.log("Aggregated result :- "+results);
	});
});

module.exports = router;