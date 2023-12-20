//set up router call routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

//router call routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;