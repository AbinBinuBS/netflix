import React, { useContext } from 'react';
import VedioTitle from './vedioTitle';
import VedioBackground from './vedioBackground';
import { MovieContext } from '../hooks/useNowPlayingMovies';

const MainContainer = () => {
    const { nowPlayingMovies } = useContext(MovieContext);
    console.log("111111111111111111111111111111111111111111",nowPlayingMovies);
    // Check if nowPlayingMovies is empty or undefined
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
      return <p>No now playing movies available</p>;
    }
  
    // Now that we're sure nowPlayingMovies has elements, proceed with accessing the first one
    const mainMovie = nowPlayingMovies[3];
    console.log("11111111111111111111111", mainMovie.title);

    return (
      <div>
        {/* Access title and overview from mainMovie */}
        <VedioTitle title={mainMovie.title} overview={mainMovie.overview} />
        <VedioBackground movieId={mainMovie.id}/>
      </div>
    );
  };
  
export default MainContainer;
