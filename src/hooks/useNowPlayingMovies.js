import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            try {
                const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS);
                const json = await data.json();
                setNowPlayingMovies(json.results);
            } catch (error) {
                console.error("Error fetching now playing movies:", error);
            }
        };

        getNowPlayingMovies();
    }, []);

    return (
        <MovieContext.Provider value={{ nowPlayingMovies }}>
            {children}
        </MovieContext.Provider>
    );
};

const useNowPlayingMovies = () => useContext(MovieContext);

export { MovieProvider, MovieContext, useNowPlayingMovies };
