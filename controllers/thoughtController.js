const { User, Thought } = require('../models')




const thoughtController = {


    getThoughtId({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
    },

    addThought({ params, body }, res) {

        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                )
            })
            .then(dbUserdata => {
                if (!dbUserdata) {
                    res.status(404).json({ message: 'no user found with this id' })
                    return;
                }
                res.json(dbUserdata)
            })
            .catch(err => res.json(err))
    },

    removeThought({ params, body }, res) {

        Thought.findByIdAndDelete({ _id: params.thoughtId })
            .then(deletedThought => {
                if (!deletedThought) {
                    return res.status(404).json({ message: 'No thought with this id!' });
                }
                return User.findOneAndUpate(
                    { _id: params.userId },
                    { $push: { _id: params.thoughtId } },
                    { new: true }
                );
            })
            .then(dbUserdata => {
                if (!dbUserdata) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
                res.json(dbUserData);

            })
            .catch(err => res.json(err))

    },

    // reaction routes

    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    }
};

module.exports = thoughtController

