import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import Wrapper from "./Wrapper";
import axios from "axios";
import Pagination from "./Pagination";
function Main() {
  const [popMovies, setMovies] = useState([]);
  const [Page, setPage] = useState(1)
  const [TotalPages,setTotalPages]=useState(null)
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { api_key: "0ada35bf73cf143eda08f5ff4af625f9" },
    }).then(({data}) => {setMovies(data.results);
    setTotalPages(data.total_pages); })
  }, []);
  useEffect(() => {
    
  console.log(popMovies)
    
  }, [popMovies])
  
  return (
    <main>
      <div className="movieSlider">
        {/* <p style={{ textAlign: "center" }}>Movie slider goes here</p> */}
      </div>
      <Wrapper>
        <h2 className="sectionTitle">Popular Movies </h2>
        <div className="gallery">
          {popMovies?.map((movie) => {
            return <Moviecard key={movie.id} e={movie} />;
          })}
        </div>
      <Pagination total={TotalPages} page={Page}/>
      </Wrapper>
    </main>
  );
}

export default Main;
