//  request npm package
var request = require("request");

// Grab the movieName which will always be the third node argument.
//var movieName = process.argv[2];
var Omdb = function(keys){
  this.findMovie  = function(movieName){
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + keys.apikey
    // This line is just to help us debug against the actual URL.

    request(queryUrl, function(error, response, body) {

      // If the request is successful
      if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("Release Year: " +  JSON.parse(body).Year);
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie plot is: " + JSON.parse(body).Plot);
        console.log("Production country is: " + JSON.parse(body).Country);
        console.log("The language of the movie is: " + JSON.parse(body).Language);
        console.log("actors in the movie are: " + JSON.parse(body).Actors);
        console.log("rotten tomatoes: " + JSON.parse(body).Ratings[1].Value);



      }
    });


  }
}
module.exports = Omdb;
// Then run a request to the OMDB API with the movie specified
