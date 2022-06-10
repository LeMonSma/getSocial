const { User } = require('../models')

const friendsController = {
    addUser({ params, body }, res) {
        console.log(body)
        User.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { friends: _id } },
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
    removeUser({ params, body }, res) {
        console.log(body)
        User.findByIdAndDelete({ _id: params.friendId })
            .then(deletedUser => {
                if (!deletedUser) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                return User.findOneAndUpate(
                    { _id: params.userId },
                    { $push: { friends: params.friendId } },
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
    }
}


module.exports = friendsController