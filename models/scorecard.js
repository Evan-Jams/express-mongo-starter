const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scorecardSchema = new Schema({
    holes:[
        {'1': {type: Number, required: true}},
        {'2': {type: Number, required: true}},
        {'3': {type: Number, required: true}},
        {'4': {type: Number, required: true}},
        {'5': {type: Number, required: true}},
        {'6': {type: Number, required: true}},
        {'7': {type: Number, required: true}},
        {'8': {type: Number, required: true}},
        {'9': {type: Number, required: true}},
        {'10': {type: Number, required: true}},
        {'11': {type: Number, required: true}},
        {'12': {type: Number, required: true}},
        {'13': {type: Number, required: true}},
        {'14': {type: Number, required: true}},
        {'15': {type: Number, required: true}},
        {'16': {type: Number, required: true}},
        {'17': {type: Number, required: true}},
        {'18': {type: Number, required: true}},
    ]
})

const Scorecard = mongoose.model('Scorecard', scorecardSchema)

module.exports = Scorecard
