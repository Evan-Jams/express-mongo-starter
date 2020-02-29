const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    course: {type: String, required: true},
    tees: String,
    score: {type: Number, required: true},
    date: String,
},
{
    timestamps: true
})

const Scores = mongoose.model('Scores', scoreSchema)

module.exports = Scores;
