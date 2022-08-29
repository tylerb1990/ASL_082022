// Imports
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Question, Quiz } = require('../models');


// Body parser
router.use(bodyParser.urlencoded({extended: false}));


// GET
router.get('/', async (req, res) => {
    const questions = await Question.findAll({
        include: Quiz
    });

    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(questions)
    }
    else {
        res.render('question/index', { questions });
    }
});

// CREATE NEW
router.get('/new', (req, res) => {
    res.render('question/create');
});

// POST
router.post('/', async (req, res) => {
    const question = await Question.create(req.body);
    let quiz = await Quiz.findAll();
    quiz = quiz.shift();
    question.addQuiz(quiz);

    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(question)
    }
    else {
        res.redirect('/questions/' + q.id);
    }
});

// GET:id
router.get('/:id', async (req, res) => {
    const question = await Question.findByPk(req.params.id)
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(question)
    }
    else {
        res.render('question/show', { question });
    }
});

// EDIT:id
router.get('/:id/edit', async (req, res) => {
    const question = await Question.findByPk(req.params.id);
    res.render('question/edit', { question });
})

// POST:id
router.post('/:id', async (req, res) => {
    const { question } = req.body;
    const { id } = req.params;
    const q = await Question.update({ question }, {
        where: { id }
    });
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json(q)
    }
    else {
        res.redirect('/questions/' + id);
    }
});

// DELETE
router.get('/:id/delete', async (req, res) => {
    const { id } = req.params;
    const deleted = await Question.destroy({
        where: { id }
    });
    if (req.headers.accept.indexOf('/json') > -1) {
        res.json({'success': deleted})
    }
    else {
        res.redirect('/questions');
    }
});


// Export
module.exports = router;