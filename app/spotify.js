var Spotify = require("node-spotify-api");

var UserSpotify = function(keys){
  this.findSong = function(songName){

    var spotify = new Spotify(keys);

    spotify.search({ type: 'track', query: songName, limit:1 }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

    var song = data.tracks.items[0];
    console.log (" artist is " + song.artists[0].name);
    console.log (" song name is" + song.name);
    console.log (" preview link is " + song.href);
    console.log (" the song is from the album " + song.album.name);
    });


  }
}
module.exports = UserSpotify;
