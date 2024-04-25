const express = require('express');
const PostController = require('../controllers/postController');

const router = express.Router();

router.get('/', PostController.renderPosts);

router.get('/create', PostController.renderCreatePost);
router.post('/create', PostController.handleCreatePost);

router.get('/update/:id', PostController.renderUpdatePost);
router.post('/update/:id', PostController.handleUpdatePost);

router.get('/delete/:id', PostController.handleDeletePost);

module.exports = router;
