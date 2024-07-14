// routes/login.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Serve the login page
router.get('/', (req, res) => {
    res.render('login');
});

// Handle login form submission
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && user.password === password) {
        // Authentication successful
        res.redirect('/catalog');
    } else {
        // Authentication failed
        res.render('login', { error: 'Invalid username or password' });
    }
});

module.exports = router;
