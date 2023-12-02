const { Thought, User } = require('../models');

module.exports = { 
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) { res.status(400).json(err); }
    },
    // get one thought by id
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.id });
            res.json(thought);
        } catch (err) { res.status(400).json(err); }
    },
    // create new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(thought);
        } catch (err) {
            if (err.name === 'ValidationError') {
                const validationErrors = {};
                for (const field in err.errors) {
                    validationErrors[field] = err.errors[field].message;
                }
                return res.status(422).json({ errors: validationErrors });
    
            }
            res.status(400).json({ message: 'An error occurred while processing the request.' });
        }
    },
    // update thought by id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
               {_id: req.params.id },
               { $set: { thoughtText: req.body.thoughtText } },
               {runValidators: true, new: true}
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought);
        } catch (err) { res.status(400).json(err); }
    },
    // delete thought by id
    async deleteThought(req , res) {
        console.log('Deleting thought with id:', req.params.id); 
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.id });
            console.log('Found thought:', thought);
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
        }
        catch (err) { res.status(400).json(err); }
    },
    // add reaction
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought);
        } catch (err) { res.status(400).json(err); }
    },
    // delete reaction
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought);
        } catch (err) { res.status(400).json(err); }
    }
};
