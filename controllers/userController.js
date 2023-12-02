const { User , Thought } = require('../models');
module.exports = {
    // get all users
   async getUsers (req, res) {
        try {
            const users = await User.find()
            res.json(users);
        } catch (err) {
            console.log(err);
            res.status(400).json(err); }
    },
    // get one user by id
    async getUserById ({ params }, res) {
        try {
            const user = await User.findOne({ _id: params.id });
            res.json(user);
        } catch (err) { res.status(400).json(err); }
    },
    // create a new user
    async createUser ({ body }, res) {
        try {
            const user = await User.create(body);
            res.json(user);
        } catch (err) { res.status(400).json(err); }
    },
    // update user by id
    async updateUser ({ params, body }, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: params.id },
                body,
                { new: true, runValidators: true }
            );
            res.json(user);
        } catch (err) { res.status(400).json(err); }
    },
    // delete user
    async deleteUser (req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            await Thought.deleteMany({ username: user.username });
            res.json(user);
        }
        catch (err) { res.status(400).json(err); }
    },
    // add friend
    async addFriend ({ params }, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: params.id },
                { $addToSet: { friends: params.friendId } },
                { new: true }
            );
            res.json(user);
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
        } catch (err) { res.status(400).json(err); }
        },
        // delete friend
    async deleteFriend ({ params }, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: params.id },
                { $pull: { friends: params.friendId } },
                { new: true }
            );
            res.json(user);
        } catch (err) { res.status(400).json(err); }

}
};