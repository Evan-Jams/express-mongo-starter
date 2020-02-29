const express = require('express')
const scores = require('express').Router()
const Scores = require('../models/scores.js')

const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// Index
scores.get('/', (req, res) => {
    Scores.find({}, (err, allScores) => {
        if(err){
            res.send('You done messed up bro')
        }
        res.render('scores/index.ejs', {
            scores: allScores,
            currentUser: req.session.currentUser
        })
    })
})

// New
scores.get('/new', isAuthenticated, (req, res) => {
    res.render('scores/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// Show
scores.get('/:id', isAuthenticated, (req, res) => {
    if(req.session.currentUser) {
    Scores.findById(req.params.id, (err, foundLog) => {
        res.render('scores/show.ejs', {
            score: foundScore,
            currentUser: req.session.currentUser
        })
    })
    } else {
        res.redirect('/sessions/new')
    }

})


// Create
scores.post('/', isAuthenticated, (req, res) => {
    // console.log(req.body);
    Scores.create(req.body, (err, newScore) => {
        res.redirect('/scores')
    })
})

// Edit
scores.get('/:id/edit', isAuthenticated, (req, res) => {
  Scores.findById(req.params.id, (error, foundScore) => {
    res.render('scores/edit.ejs', {
      score: foundScore,
      currentUser: req.session.currentUser
    })
  })
})
// Update
scores.put('/:id', isAuthenticated, (req, res) => {
  Scores.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedModel) => {
      res.redirect('/scores')
    }
  )
})

// Delete
scores.delete('/:id', isAuthenticated, (req, res) => {
  Scores.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    res.redirect('/scores')
  })
})


module.exports = scores
