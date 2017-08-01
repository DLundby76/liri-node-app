# liri-node-app

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
