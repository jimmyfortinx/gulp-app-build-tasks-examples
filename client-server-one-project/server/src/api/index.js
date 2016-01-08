var express = require('express');
var router = express.Router();
var controller = require('./api.controller');

router.get('/awesome-list', controller.getAwesomeList);

module.exports = router;
