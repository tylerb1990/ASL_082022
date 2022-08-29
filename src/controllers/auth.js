// Imports
const express = require('express');
const router = express.Router();
const axios = require('axios');
const querystring = require('querystring');
const { LoginToken } = require('../models/index');

// Secrets
const client_id = '78ad586721277b6a3874';
const client_secret = 'ee191ecca7c19150793703676eabe7d8a08b4833';

// Router Routes
router.get('/login', (req,res) => {
    res.render('auth/login');
});
router.get('/callback', async (req,res) => {
    const { code } = req.query;
    const response = await axios.post('https://github.com/login/oauth/access_token', {
        code,
        client_id,
        client_secret
    })
    const { access_token } = querystring.parse(response.data);
    req.session.access_token = access_token;
    const loginToken = await LoginToken.create({token: access_token});
    res.redirect('http://localhost:4000?token=' + access_token);
});
router.get('/token', async (req, res) => {
    const token = await LoginToken.findOne({where: {
        token: req.headers.token
    }})
    if (token) {
        req.session.access_token = req.headers.token;
        res.json(token);
    } else {
        res.json({token: false});
    }
})

// Export
module.exports = router;