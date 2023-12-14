var express = require('express');
var router = express.Router();
const nflController = require('../controllers/nflController');

/* GET home page. */
router.get('/', nflController.viewAll);
router.get('/edit/:id', nflController.renderEditForm);
router.post('/edit/:id', nflController.updateNFL);
router.get('/delete/:id', nflController.deleteNFL);
router.get('/add', nflController.renderAddForm);
router.post('/add', nflController.addNFL);

module.exports = router;