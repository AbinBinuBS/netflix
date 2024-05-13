import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className='p-6 '>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll' style={{ scrollbarWidth: 'none', 'msOverflowStyle': 'none', 'scrollbarHide': { display: 'none' } }}>
                <div className='flex'>
                    {movies && movies.length > 0 ? (
                        movies.map(movie => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))
                    ) : (
                        <p>No movies available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
