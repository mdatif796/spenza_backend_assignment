const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');

router.get('/', eventController.home);
router.get('/log', eventController.generateLog);
router.post('/on', eventController.on);
router.post('/trigger', eventController.trigger);
router.post('/off', eventController.off);


module.exports = router;