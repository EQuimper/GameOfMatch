var express = require('express');
var request = require('request');

const API_KEY = process.env.API_KEY;
console.log(API_KEY);

const app = express();

app.use(express.static('./public'));

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('App listen 3000');
  }
});

app.get('/summoner/search', function(req, res) {
  request(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/?q=${req.query.q}?api_key=${API_KEY}`)
    .pipe(res);
});
