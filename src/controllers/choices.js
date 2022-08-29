// Imports
const express = require('express');
const router = express.Router();
const { Choice, Question } = require('../models');


// GET
router.get('/', async (req, res) => {
    const choices = await Choice.findAll({
        include: Question
    });
    
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(choices)
    }
    else {
        res.render('choice/index', { choices });
    }
});

// CREATE NEW
router.get('/new', (req, res) => {
    res.render('choice/create');
});

// POST
router.post('/', async (req, res) => {
    const { choice } = req.body;
    const c = await Choice.create({ choice });

    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(c)
    }
    else {
        res.redirect('/choices/' + c.id);
    }
});

// GET:id
router.get('/:id', async (req, res) => {
    const choice = await Choice.findByPk(Number(req.params.id), {
        include: Question
    })

    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(choice)
    }
    else {
        res.render('choice/show', { choice });
    }
});

// EDIT:id
router.get('/:id/edit', async (req, res) => {
    const choice = await Choice.findByPk(req.params.id);
    res.render('choice/edit', { choice });
})

// POST:id
router.post('/:id', async (req, res) => {
    const { choice } = req.body;
    const { id } = req.params;
    const c = await Choice.update({ choice }, {
        where: { id }
    });

    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(c)
    }
    else {
        res.redirect('/choices/' + id);
    }
});

// DELETE
router.get('/:id/delete', async (req, res) => {
    const { id } = req.params;
    const deleted = await Choice.destroy({
        where: { id }
    });
    
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json({'success': deleted})
    }
    else {
        res.redirect('/choices');
    }
});


// Export
module.exports = router;