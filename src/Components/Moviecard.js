import React from "react";

function Moviecard(p) {
  const { e } = p;
  return (
    //<div className="gallery">
      <div className="movieCard">
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
          alt=""
        />
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
