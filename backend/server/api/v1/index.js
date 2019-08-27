const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/notes', require('./notes'));
router.use('/groups', require('./groups'));
router.use('/reminders', require('./reminders'));
router.use('/topics', require('./topics'));

module.exports = router;