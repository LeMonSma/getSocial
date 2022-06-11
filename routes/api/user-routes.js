const router = require('express').Router();

const {
    getAllUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userControllers')
const {
    addFriend, removeFriend
} = require('../../controllers/friendsController')


router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserId)
    .put(updateUser)
    .delete(deleteUser)
    .put(addFriend)

router
    .route('/:id/:friendId')
    .delete(removeFriend)




module.exports = router