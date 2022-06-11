const router = require('express').Router();

const {
    addFriend, removeFriend
} = require('../../controllers/friendsController')

// reusing route from usercontrollers

router
    .route('/:userId')



router
    .route('/:userId/:friendId')
    .delete(removeFriend)
    .put(addFriend)


module.exports = router
