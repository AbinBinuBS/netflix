import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const MovieContext2 = createContext();

const MovieProviderUpcoming = ({ children }) => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const getUpcomingMovies = async () => { // Rename the function to getUpcomingMovies
            try {
                const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
                const json = await data.json();
                setUpcomingMovies(json.results);
            } catch (error) {
                console.error("Error fetching upcoming movies:", error);
            }
        };

        getUpcomingMovies(); // Call getUpcomingMovies function
    }, []);

    return (
        <MovieContext2.Provider value={{ upcomingMovies }}>
            {children}
        </MovieContext2.Provider>
    );
};

const useUpcomingMovies = () => useContext(MovieContext2);

export { MovieProviderUpcoming, MovieContext2, useUpcomingMovies };
