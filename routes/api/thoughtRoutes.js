const router = require('express').Router();

// Set up GET all and POST at /api/thoughts
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/toughtsController');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:id/reactions
router
    .route('/:id/reactions')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;