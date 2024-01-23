import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovieForm from "./components/AddMovieForm";

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
      const response = await fetch("https://react-http-9242d-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("something went wrong....Retrying");
      }

      const data = await response.json();

      const loadedMovies = [];

      for ( const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,

        })
      }

      // const transformedMovies = data.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      setMovies(loadedMovies);
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

  async function addMovieHandler(movie) {
    const response = await fetch("https://react-http-9242d-default-rtdb.firebaseio.com/movies.json", {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }


  //timer for error message
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
        <AddMovieForm onAddMovie={addMovieHandler}/>
      </section>

      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        {/* <button onClick={cancelRetryHandler}>Cancel</button> */}
      </section>
      <section>
        {/* {isLoading ? <span>Loading...</span> : <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>} */}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
