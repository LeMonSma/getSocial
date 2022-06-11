const { User } = require('../models')

const friendsController = {
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: { _id: params.friendId } } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));


    },




    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));

    }

}


//     User.findByIdAndDelete({ _id: params.userId })
//         .then(deletedFriend => {
//             if (!deletedFriend) {
//                 return res.status(404).json({ message: 'No user with this id!' });
//             }
//             return User.findOneAndUpate(
//                 { _id: params.userId },
//                 { $push: { _id: params.friendId } },
//                 { new: true }
//             );
//         })
//         .then(dbUserdata => {
//             if (!dbUserdata) {
//                 return res.status(404).json({ message: 'No user found with this id!' });
//             }
//             res.json(dbUserData);

//         })
//         .catch(err => res.json(err))

// },
//}



module.exports = friendsController