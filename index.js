var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); // mongoDB library

// our db model
var VidFrame = require("frame_data.js");

/**
 * GET '/'
 * Default home route. Just relays a success message back.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/', function(req, res) {
  
  var jsonData = {
  	'name': 'pets-of-nyc',
  	'api-status':'OK'
  }

  // respond with json data
  res.json(jsonData)
});

// simple route to show the pets html
router.get('/videos', function(req,res){
  res.render('videos.html');
})