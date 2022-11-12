import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing.js";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice.js";

const Home = () => {
  // const { getAllMovies, addMovies } = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const movieText = "Pirates";
  const seriesText = "Stranger";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

// import React, { useEffect } from "react";
// import MovieListing from "../MovieListing/MovieListing";

// import { useDispatch } from "react-redux";
// import {
//   fetchAsyncMovies,
//   fetchAsyncShows,
// } from "../../features/movies/movieSlice";
// const Home = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchAsyncMovies());
//     dispatch(fetchAsyncShows());
//   }, [dispatch]);
//   return (
//     <div>
//       <div className="banner-img"></div>
//       <MovieListing />
//     </div>
//   );
// };

// export default Home;
