import React from "react";
import { popularMovies } from "../data/Movielist";
import Moviecard from "./Moviecard";
function Main() {
  return (
    <main>
      <div className="movieSlider"></div>
      <div className="wrapper">
        <h2 className="sectionTitle">Popular Movies </h2>
        {popularMovies.map((e) => {
          return <Moviecard e={e} />;
        })}
      </div>
    </main>
  );
}

export default Main;
