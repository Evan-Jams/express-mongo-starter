const bcrypt = require('bcrypt')
const express = require('express')
const scorecard = express.Router()
const Scorecard = require('../models/scorecard.js')
const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

scorecard.get('/new', isAuthenticated, (req, res) => {
    res.render('scorecard/new.ejs', {
        currentUser: req.session.currentUser
    })

})

scorecard.post('/', isAuthenticated, (req, res) => {
    
})


module.exports = scorecard
