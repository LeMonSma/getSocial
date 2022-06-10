const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');


// create schema for db
const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\.+/]

    },
    thoughts: [
        // tells db to expect an objectid 
        //and that the data comes from comment model
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

},
    // allows the use of virtuals in this schema
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }

);

// get tool count of comments and replies on retrieval
UserSchema.virtual('friendsCount').get(function () {
    return this.friends
});


// create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;