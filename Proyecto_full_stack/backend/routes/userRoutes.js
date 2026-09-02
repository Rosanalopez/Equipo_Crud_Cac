const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// Localhost:3000/api/v1/users
router.route('/signup')
    .post(userController.signUp);

router.route('/login')
    .post(userController.login);

module.exports = router;
