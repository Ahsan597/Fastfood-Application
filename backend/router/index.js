const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {res.send('working')})
// router.use('/sales', require('./sales'))
// router.use('/customer', require('./customer'))
router.use('/foods',require('./foods'))
router.use('/signup',require('./signup'))

module.exports = router;