const express = require('express');
const UserController = require('../controllers/userController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(AuthMiddleware.isAuthenticated);
router.use(AuthMiddleware.isRoleMember);

router.get('/:id', UserController.renderUser);

router.get('/update/:id', UserController.renderUpdateUser);
router.post('/update/:id', UserController.handleUpdateUser);

module.exports = router;
