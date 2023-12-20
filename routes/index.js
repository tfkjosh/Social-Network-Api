//set up router
const router = require('express').Router();
const apiRoutes = require('./api');

//router calls api routes
router.use('/api', apiRoutes);

//routes result (error)
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;