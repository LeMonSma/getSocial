const router = require('express').Router();
const thoughtRoutes = require('./thought-route');
const userRoutes = require('./user-routes')
const friendRoutes = require('./friends-route')


router.use('/users', userRoutes)
router.use('/thoughts', thoughtRoutes)
router.use('/friends', friendRoutes)

module.exports = router