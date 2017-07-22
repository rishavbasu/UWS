var path = require('path');

var express = require('express');
var router = express.Router();

var fs = require('fs');
var parse = require('csv-parse');

router.post('/read/csv', function(req, res, next) {

	console.log("Csv Reader");
	var inputFile = "../public/example-countries.csv";
	var parser = parse({delimiter: ';'}, function (err, data) {
	    // when all countries are available,then process them
	    // note: array element at index 0 contains the row of headers that we should skip
	    data.forEach(function(line) {
	      // create country object out of parsed fields
	      var country = { "name" : line[0]
	                    , "code" : line[3]
	                    , "continent" : line[4]
	                    , "population" : line[6]
	                    , "size" : line[7]
	                    };
	     console.log(JSON.stringify(country));
	    });    
	});
	
});

module.exports = router;