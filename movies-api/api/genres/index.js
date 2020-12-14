import express from 'express';
import {getGenres, } from '../tmdb-api';
const router = express.Router(); // eslint-disable-line

// Get all genres
router.get('/', (req, res) => {
    getGenres().then(genres =>  res.status(200).json(genres))
    .catch((error) => next(error));;
});


  export default router; 