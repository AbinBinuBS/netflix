import React from 'react';
import { MovieProvider } from '../hooks/useNowPlayingMovies';
import { MovieProviderPopular } from '../hooks/usePopularMovies';
import { MovieProviderUpcoming } from '../hooks/useUpcomingMovies';
import { MovieProviderTrending } from '../hooks/useTrendingMovies';
import Header from './header';
import MainContainer from './mainContainer';
import SecondaryContainer from './secondaryContainer';

function Browse() {
    return (
        <MovieProviderTrending>
            <MovieProviderUpcoming>
                <MovieProviderPopular>
                    <MovieProvider>
                        <div>
                            <Header />
                            <MainContainer />
                            <SecondaryContainer />
                        </div>
                    </MovieProvider>
                </MovieProviderPopular>
            </MovieProviderUpcoming>
        </MovieProviderTrending>
    );
}

export default Browse;
