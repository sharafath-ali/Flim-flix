import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function Slider() {
  const [popMovies, setMovies] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/now_playing",
      params: {
        api_key: "0ada35bf73cf143eda08f5ff4af625f9",
        page: 1,
      },
    })
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((e) => {
        console.log(e.message);
        // setLoading(false);
        // setError(e.message);
      });
  }, []);
  return (
    <div className='movieSlider'>
        <Splide>
        {popMovies.map((e)=>{
        <SplideSlide><img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
          alt=""
        /></SplideSlide>})}
        {/* <SplideSlide><img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`}
          alt=""
        /></SplideSlide>
        <SplideSlide><img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`}
          alt=""
        /></SplideSlide> */}
        </Splide>
    </div>
  )
}

export default Slider