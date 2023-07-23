import React from "react";
import { popularMovies } from "../data/Movielist";
import Moviecard from "./Moviecard";
import Wrapper from "./Wrapper";
function Main() {
  return (
    <main>
      <div className="movieSlider">
      {/* <p style={{ textAlign: "center" }}>Movie slider goes here</p> */}
      </div>
      <Wrapper>
        <h2 className="sectionTitle">Popular Movies </h2>
        <div className="gallery">
        {popularMovies.map((e) => {
          return <Moviecard e={e} />;
        })}
        </div>
      </Wrapper>
    </main>
  );
}

export default Main;
