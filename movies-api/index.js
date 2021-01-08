import './db';
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import topRatedMoviesRouter from './api/topRatedMovies';
import upcomingMovieRouter from './api/upcomingMovies';
import bodyParser from 'body-parser';
import {loadUsers, loadMovies, loadTopRated, loadUpcoming} from './seedData';
import usersRouter from './api/users';
import genresRouter from './api/genres'
import session from 'express-session';
import passport from './authenticate';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));


const port = process.env.PORT;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(passport.initialize());
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/upcoming', passport.authenticate('jwt', {session: false}), upcomingMovieRouter);
app.use('/api/toprated', passport.authenticate('jwt', {session: false}), topRatedMoviesRouter);
app.use('/api/users', usersRouter);
app.use('api/genres', genresRouter);
app.use(errHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
})

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadTopRated();
  loadUpcoming();
}

