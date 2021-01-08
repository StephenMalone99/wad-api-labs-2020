import express from 'express';
import getMovieReviews from '../tmdb-api';
import upcomingMovieModel from './upcomingMoviesModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  upcomingMovieModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  upcomingMovieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;