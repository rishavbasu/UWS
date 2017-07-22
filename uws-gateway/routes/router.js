var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json());

var path = require('path');

router.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, "../public/views/login.html"));
});
/********************************/
router.get('/health', function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "status":"UP" }));
});
/********************************/
router.get('/home', function(req, res, next){
	res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

var LoginController = require("../controller/LoginController");

router.use('/login', LoginController);


module.exports = router;