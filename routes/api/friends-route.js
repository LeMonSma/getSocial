const router = require('express').Router();

const {
    addUser, removeUser
} = require('../../controllers/friendsController')

// reusing route from usercontrollers

router
    .route('/:userId')
    .post(addUser)


router
    .route('/:userId/:friendId')
    .delete(removeUser)


module.exports = router
