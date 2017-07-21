console.log('liri.js file executed');
var keys = require("./keys")
console.log("keys wokring", keys)
var Omdb = require("./app/omdb")
var myOmdb = new Omdb(keys.omdb)
var command = process.argv[2];
var input = process.argv[3];

console.log(command, input);

switch (command) {
  case "my-tweets":
    return ;
  case "spotify-this-song":
    return ;
case "OMDB-Movies":
    return ;



  default:
    return;
}
