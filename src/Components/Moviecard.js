import React from "react";
import { Link } from "react-router-dom";

function Moviecard(p) {
  const { e } = p;
  const {id}=e
  return (
    //<div className="gallery">
      <div className="movieCard">
        <Link to={`movie/${id}`} > <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
          alt=""
        /></Link>
        <div className="movieCardFooter">
          <div className="movieCardDetails">
            <h2 className="movieCardTitle">{e.title}</h2>
            <p className="movieCardRating">{e.vote_average}</p>
          </div>
          <div className="favButton">#</div>
        </div>
      {/* </div> */}
      </div>
  );
}

export default Moviecard;
