import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function Moviecard(p) {
  const { e } = p;
  const {id}=e
  return (
    //<div className="gallery">
      <div className="movieCard">
        <Link to={`movie/${id}`} > <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
          alt=""
        /></Link>
        <div className="movieCardFooter">
          <div className="movieCardDetails">
            <h2 className="movieCardTitle">{e.title}</h2>
            <p className="movieCardRating">{e.vote_average}</p>
          </div>
          {/* <div className="favButton">#</div> */}
          {/* <FavoriteButton movie={e}/> */}
        </div>
      {/* </div> */}
      </div>
  );
}

export default Moviecard;
