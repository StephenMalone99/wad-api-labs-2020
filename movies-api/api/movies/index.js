import express from 'express';
import {getMovieReviews, getUpcomingMovies, getTopRatedMovies } from '../tmdb-api';

import movieModel from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  const option  = req.params.option;
  if(option == upcoming){
    movieModel.upComing().then(movies => res.status(200).send(movies)).catch(next);
  }
});


export default router;