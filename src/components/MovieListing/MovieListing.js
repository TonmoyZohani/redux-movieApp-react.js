import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice.js";
import "../MovieListing/MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  // console.log(movies);
  // console.log(movies.Response);

  let renderMovies = movies.Response ? (
    movies.Search.map((movie, index) => {
      // console.log(movie);
      return <MovieCard key={index} {...movie} />;
    })
  ) : (
    <div className="movies-error">
      console.log(movies.Error);
      <h3>{movies.Error}</h3>
    </div>
  );

  let renderShows = shows.Response ? (
    shows.Search.map((movie, index) => {
      // console.log(movie);
      return <MovieCard key={index} {...movie} />;
    })
  ) : (
    <div className="movies-error">
      console.log(movies.Error);
      <h3>{movies.Error}</h3>
    </div>
  );

  // console.log(renderMovies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;

// import React from "react";
// import { useSelector } from "react-redux";
// import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
// import MovieCard from "../MovieCard/MovieCard";
// import "./MovieListing.scss";
// const MovieListing = () => {
//   const movies = useSelector(getAllMovies);
//   const shows = useSelector(getAllShows);
//   let renderMovies,
//     renderShows = "";

//   renderMovies =
//     movies.Response === "True" ? (
//       movies.Search.map((movie, index) => (
//         <MovieCard key={index} data={movie} />
//       ))
//     ) : (
//       <div className="movies-error">
//         <h3>{movies.Error}</h3>
//       </div>
//     );

//   renderShows =
//     shows.Response === "True" ? (
//       shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
//     ) : (
//       <div className="shows-error">
//         <h3>{shows.Error}</h3>
//       </div>
//     );
//   return (
//     <div className="movie-wrapper">
//       <div className="movie-list">
//         <h2>Movies</h2>
//         <div className="movie-container">{renderMovies}</div>
//       </div>
//       <div className="show-list">
//         <h2>Shows</h2>
//         <div className="movie-container">{renderShows}</div>
//       </div>
//     </div>
//   );
// };

// export default MovieListing;
