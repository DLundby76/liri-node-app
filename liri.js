
var keys = require("./keys");

var Omdb = require("./app/omdb");
var myOmdb = new Omdb(keys.omdb);
var UserTwitter = require("./app/twitter");
var userTwitter = new UserTwitter(keys.twitterKeys);
var UserSpotify = require("./app/spotify");
var spotify = new UserSpotify(keys.spotifyKeys);
var command = process.argv[2];
var input = process.argv[3];




switch (command) {
  case "user-tweets":
    userTwitter.getTweets(input);
    return ;
  case "spotify-this-song":
    spotify.findSong(input);
    return ;
  case "OMDB-Movies":
    myOmdb.findMovie(input);
    return ;




  default:
    return;
}
