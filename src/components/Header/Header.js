import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import logo from "../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    console.log(term);
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} width="200px" height="22px" />
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={term}
            placeholder="Search Here"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <BsSearch className="search"/>
          </button>
        </form>
      </div>
      {/* <div className="user-image">
        <img src={user} alt="user" />
      </div> */}
    </div>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import user from "../../images/user.png";
// import "./Header.scss";

// const Header = () => {
//   return (
//     <div className="header">
//       <Link to="/">
//         <div className="logo">Movie App</div>
//       </Link>
//       <div className="user-image">
//         <img src={user} alt="user" />
//       </div>
//     </div>
//   );
// };

// export default Header;
