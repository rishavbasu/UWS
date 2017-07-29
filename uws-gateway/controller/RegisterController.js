var path = require('path');
var express = require('express');

var request = require('request');
var async = require('async');

var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json());

var registerUrl = "http://localhost:8000/register/";

router.post('/', function(req, res, next) {
	var url = registerUrl + "business";
	request(url, function(err, response, body) {
		if (err) {
			console.log(err);
			return;
		}
		console.log("Return from registration :- "+body);
	});
});

module.exports = router;