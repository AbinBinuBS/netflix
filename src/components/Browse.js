import React from 'react';
import { MovieProvider } from '../hooks/useNowPlayingMovies';
import Header from './header';
import MainContainer from './mainContainer';
import SecondaryContainer from './secondaryContainer';

function Browse() {
    return (
        <MovieProvider>
            <div>
                <Header />
                <MainContainer />
                <SecondaryContainer />
            </div>
        </MovieProvider>
    );
}

export default Browse;
