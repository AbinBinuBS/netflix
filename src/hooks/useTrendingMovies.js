import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const MovieContext3 = createContext();

const MovieProviderTrending = ({ children }) => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const getTrendingMovies = async () => {
            try {
                const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
                const json = await data.json();
                setTrendingMovies(json.results);
            } catch (error) {
                console.error("Error fetching trending movies:", error);
            }
        };

        getTrendingMovies();
    }, []);

    return (
        <MovieContext3.Provider value={{ trendingMovies }}>
            {children}
        </MovieContext3.Provider>
    );
};

const useTrendingMovies = () => useContext(MovieContext3);

export { MovieProviderTrending, MovieContext3, useTrendingMovies };
