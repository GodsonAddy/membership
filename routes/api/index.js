const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/sms', require('./sms'));
router.use('/members', require('./members'));

module.exports = router;