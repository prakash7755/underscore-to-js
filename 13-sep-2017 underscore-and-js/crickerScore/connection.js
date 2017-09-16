'use strict'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cricketdb');
var Schema= mongoose.Schema({
    playerName: String,
    score_14_to_15: String,
    score_15_to_16: String,
    score_16_to_17: String,
});


let players = mongoose.model('player', Schema);
module.exports = players;