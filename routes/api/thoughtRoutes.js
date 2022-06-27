const router = require('express').Router();
const {
  getAllThoughts,
  addThought,
  addReaction,
  removeThought,
  removeReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts);
router.route('/:userId').post(addThought);
router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
