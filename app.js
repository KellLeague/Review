const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//body parser
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.post('/user/post', createUser);
app.get('/users', readAll);
app.get('/user/:id',getSingleUser);
app.get('/users/genres', readAllGenres);

app.post('/show', postNewShow);
app.get('/show/byGenre/:id', getShowByGenreID);
app.get('/show/:id', getOneShow);
app.get('/show/byUser/:id', getShowByUserID);

app.get('/shows', getAllShows);

app.get('/comments/:id', readUserComment);
app.get('/user/comment', postComment);
