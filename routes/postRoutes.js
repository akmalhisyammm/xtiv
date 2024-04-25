const express = require('express');
const PostController = require('../controllers/postController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(AuthMiddleware.isAuthenticated);
router.use(AuthMiddleware.isRoleMember);

router.get('/', PostController.renderPosts);

router.get('/create', PostController.renderCreatePost);
router.post('/create', PostController.handleCreatePost);

router.get('/update/:id', PostController.renderUpdatePost);
router.post('/update/:id', PostController.handleUpdatePost);

router.get('/delete/:id', PostController.handleDeletePost);

module.exports = router;
