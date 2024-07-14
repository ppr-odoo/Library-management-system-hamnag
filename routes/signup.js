// routes/signup.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Serve the signup page
router.get('/', (req, res) => {
    res.render('signup');
});

// Handle signup form submission
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        // User already exists
        res.render('signup', { error: 'Username already taken' });
    } else {
        // Create new user
        const user = new User({ username, password });
        await user.save();
        res.redirect('/login');
    }
});

module.exports = router;
