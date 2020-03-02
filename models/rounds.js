const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scorecardSchema = new Schema({
    holes:{
        '1': {
            type: Number,
            par: 5,
            required: true
        },
        '2': {
            type: Number,
            par: 4,
            required: true
        },
        '3': {
            type: Number,
            par: 4,
            required: true
        },
        '4': {
            type: Number,
            par: 3,
            required: true
        },
        '5': {
            type: Number,
            par: 4,
            required: true
        },
        '6': {
            type: Number,
            par: 4,
            required: true
        },
        '7': {
            type: Number,
            par: 5,
            required: true
        },
        '8': {
            type: Number,
            par: 3,
            required: true
        },
        '9': {
            type: Number,
            par: 4,
            required: true
        },
        '10': {
            type: Number,
            par: 5,
            required: true
        },
        '11': {
            type: Number,
            par: 4,
            required: true
        },
        '12': {
            type: Number,
            par: 4,
            required: true
        },
        '13': {
            type: Number,
            par: 3,
            required: true
        },
        '14': {
            type: Number,
            par: 4,
            required: true
        },
        '15': {
            type: Number,
            par: 4,
            required: true
        },
        '16': {
            type: Number,
            par: 5,
            required: true
        },
        '17': {
            type: Number,
            par: 3,
            required: true
        },
        '18': {
            type: Number,
            par: 4,
            required: true
        },
    }
})

const roundSchema = new Schema({
    course: {type: String, required: true},
    tees: String,
    score: {type: Number, required: true},
    date: {type: String, required: true, default: Date.now},
    // scorecard: scorecardSchema
},
{
    timestamps: true
})

const Rounds = mongoose.model('Rounds', roundSchema)
// const Scorecard = mongoose.model('Scorecard', scorecardSchema)

module.exports = Rounds;
