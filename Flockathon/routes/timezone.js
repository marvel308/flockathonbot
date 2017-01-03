/**
 * Created by vaibhav.tr on 03/01/17.
 */
var express = require('express');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    request('http://www.convert-unix-time.com/api?date=2011-02-01%2008:23:33&timezone=india', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body) // Show the HTML for the Google homepage.
        }
    })

});

module.exports = router;