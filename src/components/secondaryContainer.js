import React,{ useContext } from 'react'
import MovieList from './movieList';
import { MovieContext } from '../hooks/useNowPlayingMovies';
import { MovieContext1 } from '../hooks/usePopularMovies'
import { MovieContext2 } from '../hooks/useUpcomingMovies';
import { MovieContext3 } from '../hooks/useTrendingMovies';


const SecondaryContainer = () => {
  const { nowPlayingMovies } = useContext(MovieContext);
  const {popularMovies} = useContext(MovieContext1);
  const {upcomingMovies} = useContext(MovieContext2)
  const {trendingMovies} = useContext(MovieContext3)
  return (
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
        <MovieList title={'Now Playing'}  movies={nowPlayingMovies}/>
        <MovieList title={'Popular'}  movies={popularMovies}/>
        <MovieList title={'Upcoming Movies'}  movies={upcomingMovies}/>
        <MovieList title={'Trending'}  movies={trendingMovies}/>
        <MovieList title={'Horror'}  movies={nowPlayingMovies}/>
      </div>
      

    </div>
  )
}

export default SecondaryContainer
