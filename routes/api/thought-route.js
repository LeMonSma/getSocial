const router = require('express').Router();

const {
    addThought, removeThought, getThoughtId, addReaction, removeReaction
} = require('../../controllers/thoughtController')



router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .get(getThoughtId)
    .put(addReaction)
    .delete(removeThought)

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction)



module.exports = router