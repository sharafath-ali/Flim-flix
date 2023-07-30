import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import Wrapper from "./Wrapper";
import axios from "axios";
import Pagination from "./Pagination";
import Loader from './Loader'
import ErrorMessage from "./Error";
function Main() {
  const [popMovies, setMovies] = useState([]);
  const [Page, setPage] = useState(1);
  const [TotalPages, setTotalPages] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState('');
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: {
        api_key: "0ada35bf73cf143eda08f5ff4af625f9",
        page: Page,
      },
    })
      .then(({ data }) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
        setError(e.message);
      });
  }, [Page]);

  return (
    <main>
      <div className="movieSlider">
        {/* <p style={{ textAlign: "center" }}>Movie slider goes here</p> */}
      </div>
      <Wrapper>
        <h2 className="sectionTitle">Popular Movies </h2>
        {Error && (<ErrorMessage Error={Error}/>)}
        {!Error&&(Loading ? (
            <Loader/>
          ) : (
            <div className="gallery">
            {popMovies?.map((movie) => {
              return <Moviecard key={movie.id} e={movie} />;
            })}
            </div>
          ))}
        
        <Pagination total={TotalPages} page={Page} setPage={setPage} />
      </Wrapper>
    </main>
  );
}

export default Main;
