


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


var omdb = {
  apikey:"40e9cece"
}

var twitterKeys ={
  consumer_key: 'LuwGZL3LYT833xaQvfsmBEcXr',
  consumer_secret: 'Y2LEiyJMDUxgEdRhLw47plY2Nc1p4lAY6atKlwovlEY9B6cCMO',
  access_token_key: '885257765500923904-cHu02eFaIh9XeDnZGyqdjDrJJWg6MuJ',
  access_token_secret: 'sXHNRjnren0MzS692lKzdPkAp85wcfC0HQxbYUxNLItTI'
  }

var spotifyKeys ={
  id: '1e7023ab69634e05911ade00c7675562',
  secret: '4415e27db7534628aa14c1f75b401831'

}

module.exports = {
  omdb,
  twitterKeys,
  spotifyKeys
}
