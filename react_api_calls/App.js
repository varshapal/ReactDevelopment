import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //const [retryCount, setRetryCount] = useState(3);
  //const [cancelRetry, setCancelRetry] = useState(false);

  

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      
        const response = await fetch('https://swapi.dev/api/films');

      if(!response.ok) {
        throw new Error('something went wrong....Retrying');
      }
      
      
      const data = await response.json();
      
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
      
    } catch (error) {
        setError(error.message);
        //setRetryCount(retryCount - 1);
        
    }
    setIsLoading(false);
    //setCancelRetry(false);
    
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // useEffect(() => {
  //   if(retryCount > 0 && error ) {
  //     const retryTimer = setTimeout(() => {
  //       fetchMoviesHandler();
  //     }, 1000);

  //     return () => 
  //       clearTimeout(retryTimer);
  //     };
  //   }, [retryCount, error, cancelRetry]);
  
    // const cancelRetryHandler = () => {
    //   setCancelRetry(true);
    // }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {/* <button onClick={cancelRetryHandler}>Cancel</button> */}
      </section>
      <section>
        {/* {isLoading ? <span>Loading...</span> : <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>} */}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} /> }
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        { isLoading && <p>Loading...</p>}
        
      </section>
    </React.Fragment>
  );
}

export default App;
