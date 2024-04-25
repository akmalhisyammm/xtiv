const express = require('express');
const AuthController = require('../controllers/authController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// router.use(AuthMiddleware.isUnauthenticated);

router.get('/', AuthMiddleware.isUnauthenticated, AuthController.renderHome);

router.get('/register', AuthMiddleware.isUnauthenticated, AuthController.renderRegister);
router.post('/register', AuthMiddleware.isUnauthenticated, AuthController.handleRegister);

router.get('/login', AuthMiddleware.isUnauthenticated, AuthController.renderLogin);
router.post('/login', AuthMiddleware.isUnauthenticated, AuthController.handleLogin);

router.get('/logout', AuthController.handleLogout);

module.exports = router;
