var express = require('express');
var router = express.Router();
const nflController = require('../controllers/nflController');

/* GET home page. */
router.get('/', nflController.viewAll);

module.exports = router;
