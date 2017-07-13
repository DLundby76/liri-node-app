console.log('this is loaded')


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'LuwGZL3LYT833xaQvfsmBEcXr',
  consumer_secret: 'Y2LEiyJMDUxgEdRhLw47plY2Nc1p4lAY6atKlwovlEY9B6cCMO',
  access_token_key: '885257765500923904-cHu02eFaIh9XeDnZGyqdjDrJJWg6MuJ',
  access_token_secret: 'sXHNRjnren0MzS692lKzdPkAp85wcfC0HQxbYUxNLItTI'
});

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '1e7023ab69634e05911ade00c7675562',
  secret: '4415e27db7534628aa14c1f75b401831'
});

var request = require('request');
request('http://www.omdbapi.com/?apikey=40e9cece&', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
