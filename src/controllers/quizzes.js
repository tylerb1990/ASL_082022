// Imports
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Quiz, Question, Choice } = require('../models')
const { isAuthenticated } = require('../middlewares/auth');


// GET
router.get('/', isAuthenticated, async (req, res) => {
    const quizzes = await Quiz.findAll({
        include: [
            {model: Question, include: [Choice]}
        ]
    });

    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(quizzes)
    }
    else {
        res.render('quiz/index', { quizzes });
    }
});

// CREATE NEW
router.get('/new', isAuthenticated, (req, res) => {
    res.render('quiz/create');
});

// POST
router.post('/', isAuthenticated, async (req, res) => {
    const {name, weight} = req.body;
    const quiz = await Quiz.create({ name, weight });
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(quiz)
    }
    else {
        res.redirect('/quizzes/' + quiz.id);
    }
});

// GET:id
router.get('/:id', isAuthenticated, async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id, {
        include: [
            {model: Question, include: [Choice]}
        ]
    });
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(quiz);
    }
    else {
        res.render('quiz/show', { quiz });
    }
});

// EDIT:id
router.get('/:id/edit', isAuthenticated, async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id);
    res.render('quiz/edit', { quiz });
})

// POST:id
router.post('/:id', isAuthenticated, async (req, res) => {
    const { name, weight } = req.body;
    const { id } = req.params;
    const quiz = await Quiz.update({ name, weight }, {
        where: { id }
    });
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(quiz)
    }
    else {
        res.redirect('/quizzes/' + id);
    }
});

// DELETE
router.get('/:id/delete', isAuthenticated, async (req, res) => {
    const { id } = req.params;
    const deleted = await Quiz.destroy({
        where: { id }
    });
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json({'success': deleted})
    }
    else {
        res.redirect('/quizzes');
    }
});

// Export
module.exports = router;