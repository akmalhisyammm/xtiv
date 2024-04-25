const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/:id', UserController.renderUser);

router.get('/update/:id', UserController.renderUpdateUser);
router.post('/update/:id', UserController.handleUpdateUser);

module.exports = router;
