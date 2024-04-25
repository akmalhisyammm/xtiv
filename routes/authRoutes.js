const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.get('/', AuthController.renderHome);

router.get('/register', AuthController.renderRegister);
router.post('/register', AuthController.handleRegister);

router.get('/login', AuthController.renderLogin);
router.post('/login', AuthController.handleLogin);

router.get('/logout', AuthController.handleLogout);

module.exports = router;
