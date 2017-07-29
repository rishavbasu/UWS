var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json());

var path = require('path');

router.get('/', function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "status":"COMMING SOON ..!!" }));
});
/********************************/
router.get('/health', function(req, res, next){
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ "status":"UP" }));
});
/********************************/
router.get('/registration', function(req, res, next){
	res.sendFile(path.join(__dirname, "../public/views/registerBusinessHouse.html"));
});

var LoginController = require("../controller/LoginController");
var RegisterController = require("../controller/RegisterController");

router.use('/login', LoginController);
router.use('/register', RegisterController);

module.exports = router;