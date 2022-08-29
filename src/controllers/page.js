// Imports
const express = require('express');
const router = express.Router();

router.use('/', async (req, res) => {
    res.render('pages/home')
})

// Export
module.exports = router;