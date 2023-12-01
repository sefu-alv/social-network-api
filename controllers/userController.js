const User = require('../models/User');

module.exports = {
    async getUsers (req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) { res.status(400).json(err); }
    },
    async getUserById ({ params }, res) {
        try {
            const user = await User.findOne({ _id: params.id });
            res.json(user);
        } catch (err) { res.status(400).json(err); }
    },
    async createUser ({ body }, res) {
        try {
            const user = await User.create(body);
            res.json(user);
        } catch (err) { res.status(400).json(err); }
    },
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
    async deleteUser ({ params }, res) {
        try {
            const user = await User.findOneAndDelete({ _id: params.id });
        }
        catch (err) { res.status(400).json(err); }
    },
    async addFriend ({ params }, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: params.id },
                { $push: { friends: params.friendId } },
                { new: true }
            );
            res.json(user);
        } catch (err) { res.status(400).json(err); }
        },
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