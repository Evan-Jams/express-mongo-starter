const express = require('express')
const rounds = require('express').Router()
const Rounds = require('../models/rounds.js')

const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// Presentation Routes
// Index
rounds.get('/', (req, res) => {
        Rounds.find({}, (err, allRounds) => {
            if(err){
                res.send('You done messed up bro')
            }
            res.render('rounds/index.ejs', {
                rounds: allRounds,
                currentUser: req.session.currentUser
            })
        })

})

// New
rounds.get('/new', isAuthenticated, (req, res) => {
    res.render('rounds/new.ejs', {
        currentUser: req.session.currentUser
    })
})

// Show
rounds.get('/:id', isAuthenticated, (req, res) => {
    if(req.session.currentUser) {
    Rounds.findById(req.params.id, (err, foundRound) => {
        res.render('rounds/show.ejs', {
            round: foundRound,
            currentUser: req.session.currentUser
        })
    })
    } else {
        res.redirect('/sessions/new')
    }

})


// Create
rounds.post('/', isAuthenticated, (req, res) => {
    Rounds.create(req.body, (err, newRound) => {
        res.redirect('/')
    })
})

// Edit
rounds.get('/:id/edit', isAuthenticated, (req, res) => {
  Rounds.findById(req.params.id, (error, foundRound) => {
    res.render('rounds/edit.ejs', {
      round: foundRound,
      currentUser: req.session.currentUser
    })
  })
})
// Update
rounds.put('/:id', isAuthenticated, (req, res) => {
  Rounds.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedModel) => {
      res.redirect('/rounds')
    }
  )
})

// Delete
rounds.delete('/:id', isAuthenticated, (req, res) => {
  Rounds.findByIdAndRemove(req.params.id, (err, deletedRound) => {
    res.redirect('/rounds')
  })
})


module.exports = rounds
