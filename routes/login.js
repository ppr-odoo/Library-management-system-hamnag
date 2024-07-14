// routes/login.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Login page
router.get('/', (req, res) => {
    res.render('login');
});

// Handle login
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && user.password === password) {
        // Authentication successful
        res.redirect('/app');
    } else {
        // Authentication failed
        res.render('login', { error: 'Invalid username or password' });
    }
});

module.exports = router;
