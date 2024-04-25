const express = require('express');
const DashboardController = require('../controllers/dashboardController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(AuthMiddleware.isAuthenticated);
router.use(AuthMiddleware.isRoleAdmin);

router.get('/', DashboardController.renderDashboard);

router.get('/users', DashboardController.renderUsers);
router.get('/users/delete/:id', DashboardController.handleDeleteUser);

router.get('/posts', DashboardController.renderPosts);
router.get('/posts/delete/:id', DashboardController.handleDeletePost);

router.get('/tags', DashboardController.renderTags);
router.get('/tags/create', DashboardController.renderCreateTag);
router.post('/tags/create', DashboardController.handleCreateTag);
router.get('/tags/update/:id', DashboardController.renderUpdateTag);
router.post('/tags/update/:id', DashboardController.handleUpdateTag);
router.get('/tags/delete/:id', DashboardController.handleDeleteTag);

module.exports = router;
