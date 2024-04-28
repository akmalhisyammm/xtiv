const express = require('express');
const AuthController = require('../controllers/authController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', AuthMiddleware.isLoggedOut, AuthController.renderHome);

router.get('/register', AuthMiddleware.isLoggedOut, AuthController.renderRegister);
router.post('/register', AuthMiddleware.isLoggedOut, AuthController.handleRegister);

router.get('/login', AuthMiddleware.isLoggedOut, AuthController.renderLogin);
router.post('/login', AuthMiddleware.isLoggedOut, AuthController.handleLogin);

router.get('/logout', AuthController.handleLogout);

module.exports = router;
