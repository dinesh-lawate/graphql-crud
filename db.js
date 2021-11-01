const mongoose = require('mongoose');
const uri = "mongodb+srv://test:test1234@dinesh.5u13n.mongodb.net/friends?retryWrites=true&w=majority";
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => console.log('Error connecting to MongoDB', err));

const friendSchema = new mongoose.Schema(
    {
        firstName: {
            type: 'string',
            required: true
        },
        lastName: {
            type: 'string',
            required: true
        },
        gender: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true
        },
        age: {
            type: 'number',
            required: true
        }
    },
    {
        timestamps: true
    });

const FriendModel = mongoose.model('friend', friendSchema);

async function addFriend(friendInput) {
    console.log('Calling addFriend');
    try {
        const friend = new FriendModel(friendInput);
        const result = await friend.save();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function getFriends() {
    console.log('Calling getFriends');
    try {
        const result = await FriendModel.find();
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function getFriendById(id) {
    console.log('Calling getFriend');
    try {
        const result = await FriendModel.findById(id);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function updateFriend(id, payload) {
    console.log('Calling updateFriend');
    try {
        const result = await FriendModel.findByIdAndUpdate(id, payload)
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function deleteFriend(id) {
    console.log('Calling deleteFriend');
    try {
        const result = await FriendModel.findByIdAndDelete(id)
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    addFriend,
    getFriends,
    getFriendById,
    updateFriend,
    deleteFriend
}