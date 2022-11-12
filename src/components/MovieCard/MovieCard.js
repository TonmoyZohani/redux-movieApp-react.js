import React from "react";
import { Link } from "react-router-dom";
import "../MovieCard/MovieCard.scss";

const MovieCard = (movie) => {
  const { Title, Poster, Year, imdbID } = movie;
  // console.log(imdbID);

  return (
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={Poster} alt={Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./MovieCard.scss";

// const MovieCard = (props) => {
//   const { data } = props;
//   return (
//     <div className="card-item">
//       <Link to={`/movie/${data.imdbID}`}>
//         <div className="card-inner">
//           <div className="card-top">
//             <img src={data.Poster} alt={data.Title} />
//           </div>
//           <div className="card-bottom">
//             <div className="card-info">
//               <h4>{data.Title}</h4>
//               <p>{data.Year}</p>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default MovieCard;
