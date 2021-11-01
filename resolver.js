const { Friend } = require('./dto');

const resolver = {
    getFriends: async (args, context, info) => {
        console.log('Calling getFriends resolver');
        const data = await context.db.getFriends();
        return data.map(f => {
            return new Friend(f._id.toString(), {
                firstName: f.firstName,
                lastName: f.lastName,
                gender: f.gender,
                email: f.email,
                age: f.age
            });
        });
    },
    getFriendById: async (args, context, info) => {
        console.log('Calling getFriendById resolver');
        const data = await context.db.getFriendById(args.id);
        return new Friend(data._id.toString(), {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            email: data.email,
            age: data.age
        });
    },
    createFriend: async (args, context, info) => {
        console.log('Calling createFriend resolver');
        const friendToAdd = {
            firstName: args.friend.firstName,
            lastName: args.friend.lastName,
            gender: args.friend.gender,
            email: args.friend.email,
            age: args.friend.age
        }
        const data = await context.db.addFriend(friendToAdd);
        return new Friend(data._id.toString(), {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            email: data.email,
            age: data.age
        });
    },
    updateFriend: async (args, context, info) => {
        console.log('Calling updateFriend resolver');

        const updatePayload = {};
        for (let prop in args.friend) {
            updatePayload[prop] = args.friend[prop];
        }

        const data = await context.db.updateFriend(args.id, updatePayload);
        return new Friend(data._id.toString(), {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            email: data.email,
            age: data.age
        });
    },
    deleteFriend: async (args, context, info) => {
        console.log('Calling deleteFriend resolver');

        const data = await context.db.deleteFriend(args.id);
        return new Friend(data._id.toString(), {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            email: data.email,
            age: data.age
        });
    }
};

module.exports = {
    resolver
}