const Scores = require('../../models/scores.js')

const sum = (arr) => {
    let reducer = (accumulator, currentValue) => {
        accumulator + currentValue
    }
    return arr.reduce(reducer)
}

console.log(sum(Scores, 0));
