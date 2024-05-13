import React, { useContext } from 'react';
import VedioTitle from './vedioTitle';
import VedioBackground from './vedioBackground';
import { MovieContext } from '../hooks/useNowPlayingMovies';
import { MovieContext1 } from '../hooks/usePopularMovies';

const MainContainer = () => {
    const { nowPlayingMovies } = useContext(MovieContext);
    const { popularMovies } = useContext(MovieContext1);

    console.log("Now Playing Movies:", nowPlayingMovies);
    console.log("Popular Movies:", popularMovies);

    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      return <p>No now playing movies available</p>;
    }

    if (!popularMovies || popularMovies.length === 0) {
      return <p>No popular movies available</p>;
    }

    const mainMovie = nowPlayingMovies[3];

    return (
      <div>
        <VedioTitle title={mainMovie.title} overview={mainMovie.overview} />
        <VedioBackground movieId={mainMovie.id}/>
      </div>
    );
  };
  
export default MainContainer;
