'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Players = require('./connection');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.put('/cricketscore', function(req, res) {
    let playerName = req.body.playerName;
    let score_14_to_15 = req.body.score_14_to_15;
    let score_15_to_16 = req.body.score_15_to_16;
    let score_16_to_17 = req.body.score_16_to_17;
    Players.find({ playerName }, function(error, results) {
        if (results.length > 0) {
            let msg = 'this playerName alredy exit'
            return res.send(msg)
        }

        const players = new Players({
            playerName,
            score_14_to_15,
            score_15_to_16,
            score_16_to_17
        });

        players.save(function(error, result) {
            if (error) {
                return console.error(error);
            }
            res.JSON(result)
        })
    });
});

app.post('/checkScore', function(req, res) {
    let playerName = req.body.playerName;
    Players.find({ playerName }, function(req, res) {
        if (error) {
            return console.error(error)
        }
        if (!result) {
            return console.log('Sorry This Player Not Exist')
        }
        res.JSON({
            isSuccess: true,
            result
        })
    })
})


app.listen(3000, function() {
    console.log('Port 3000 Connected')
})