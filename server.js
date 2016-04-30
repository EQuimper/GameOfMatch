'use strict';
let express = require('express');
let request = require('request');

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3000;
const ROOT_URL = 'https://na.api.pvp.net/api/lol/na';
const GLOVAL_URL = 'https://global.api.pvp.net/api/lol/static-data/na';
const IMG_URL = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img';

const MY_ID = '23839568';

const app = express();

app.use(express.static('./dist'));

// Get Summoner Id and Profile Icon
app.get('/summoner/search', function(req, res) {
    request(`${ROOT_URL}/v1.4/summoner/by-name/${req.query.q}?api_key=${API_KEY}`)
    .pipe(res);
});

// Get Summoner Stats by his Id
app.get('/summoner/stats/search', (req, res) => {
    request(`${ROOT_URL}/v1.3/stats/by-summoner/${req.query.q}/ranked?season=SEASON2016&api_key=${API_KEY}`)
    .pipe(res);
});

// Get Last 10 Games
app.get('/summoner/10-last-game/', (req, res) => {
    request(`${ROOT_URL}/v2.2/matchlist/by-summoner/${req.query.q}?rankedQueues=TEAM_BUILDER_DRAFT_RANKED_5x5&seasons=SEASON2016&beginIndex=0&endIndex=10&api_key=${API_KEY}`)
    .pipe(res);
});

// Get All Game
app.get('/summoner/all-game/', (req, res) => {
    request(`${ROOT_URL}/v2.2/matchlist/by-summoner/${req.query.q}?rankedQueues=TEAM_BUILDER_DRAFT_RANKED_5x5&seasons=SEASON2016&api_key=${API_KEY}`)
    .pipe(res);
});

// Global get Champion With their tag
app.get('/global/champion/', (req, res) => {
    request(`${GLOVAL_URL}/v1.2/champion?champData=tags&api_key=${API_KEY}`)
    .pipe(res);
});

// Profile Icon Img
app.get('/summoner/profile-icon/', (req, res) => {
    request(`${IMG_URL}/profileicon/${req.query.q}.png`)
    .pipe(res);
});

// Champion Square Img
app.get('/summoner/champion-img/', (req, res) => {
    request(`${IMG_URL}/champion/${capitalizeFirstLetter(req.query.q)}.png`)
    .pipe(res);
});


app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`App listen ${PORT}`);
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
