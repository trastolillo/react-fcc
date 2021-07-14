import React from 'react';
import { useParams } r;
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import Grid from './Grid';
import Spinner from './Spinner';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { state: movie, loading, error } = useMovieFetch(movieId);
    return (
        <>
            <div>Movie</div>
        </>
    );
};

export default Movie;