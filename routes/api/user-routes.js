const router = require('express').Router();

const {
    getAllUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userControllers')

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserId)
    .put(updateUser)
    .delete(deleteUser)



module.exports = router