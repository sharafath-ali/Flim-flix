import React from "react";

function Main() {
  return (
    <main>
      <div className="movieSlider"></div>
      <div className="wrapper">
        <h2 className="sectionTitle">Popular Movies </h2>
        <div className="gallery">
          <div className="movieCard">
            <img
              className="moviePoster"
              src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
              alt=""
            />
            <div className="movieCardFooter">
              <div className="movieCardDetails">
                <h2 className="movieCardTitle">Avatar: The Way of Water</h2>
                <p className="movieCardRating">7.7</p>
              </div>
              <div className="favButton">#</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
