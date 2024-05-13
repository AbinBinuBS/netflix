import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const MovieContext1 = createContext();

const MovieProviderPopular = ({ children }) => {
    const [popularMovies, setPopularMovies] = useState([]); // Changed from nowPlayingMovies to popularMovies

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
                const json = await data.json();
                setPopularMovies(json.results); // Changed from setNowPlayingMovies to setPopularMovies
                console.log("99999999999999999999999999",popularMovies);
            } catch (error) {
                console.error("Error fetching popular movies:", error); // Changed error message
            }
        };

        getPopularMovies();
    }, []);

    return (
        <MovieContext1.Provider value={{ popularMovies }}> {/* Changed from nowPlayingMovies to popularMovies */}
            {children}
        </MovieContext1.Provider>
    );
};

const usePopularMovies = () => useContext(MovieContext1);

export { MovieProviderPopular, MovieContext1, usePopularMovies };
