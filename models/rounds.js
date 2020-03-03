const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scorecardSchema = new Schema({
    holes:{
        one : {
            stokes: Number,
            par: Number || 5
        },
        two: {
            stokes: Number,
            par: Number || 4
        },
        three: {
            stokes: Number,
            par: Number || 4
        },
        four: {
            stokes: Number,
            par: Number || 3
        },
        five: {
            stokes: Number,
            par: Number || 4
        },
        six: {
            stokes: Number,
            par: Number || 4
        },
        seven: {
            stokes: Number,
            par: Number || 5
        },
        eight: {
            stokes: Number,
            par: Number || 3
        },
        nine: {
            stokes: Number,
            par: Number || 4
        },
        ten: {
            stokes: Number,
            par: Number || 5
        },
        eleven: {
            stokes: Number,
            par: Number || 4
        },
        twelve: {
            stokes: Number,
            par: Number || 4
        },
        thirteen: {
            stokes: Number,
            par: Number || 3
        },
        fourteen: {
            stokes: Number,
            par: Number || 4
        },
        fifteen: {
            stokes: Number,
            par: Number || 4
        },
        sixteen: {
            stokes: Number,
            par: Number || 5
        },
        seventeen: {
            stokes: Number,
            par: Number || 3
        },
        eighteen: {
            stokes: Number,
            par: Number || 4
        },
    }
})

const roundSchema = new Schema({
    course: {type: String, required: true},
    tees: String,
    score: {type: Number, required: true},
    date: {type: String, required: true, default: Date.now},
    scorecard: scorecardSchema
},
{
    timestamps: true
})

const Rounds = mongoose.model('Rounds', roundSchema)
// const Scorecard = mongoose.model('Scorecard', scorecardSchema)

module.exports = Rounds
