import { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        const getMovieVideos = async () => {
            try {
                const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
                const json = await data.json();
                const filterData = json.results.filter(video => video.type === 'Trailer');
                const selectedTrailer = filterData.length ? filterData[0] : json.results[0];
                setTrailer(selectedTrailer);
            } catch (error) {
                console.error('Error fetching movie videos:', error);
            }
        }

        getMovieVideos();
    }, [movieId]);

    return trailer;
}

export default useMovieTrailer;
