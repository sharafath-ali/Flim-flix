import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Loader from './Loader';

function Slider() {
  const [popMovies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState('');
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
        setLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
         setLoading(false);
         setError(e.message);
      });
  }, []);
  return (
    <div className='movieSlider'>
        {Loading? <Loader/>:(
        <Splide>
        {popMovies.map((e)=>{return(
        <SplideSlide key={e.id}><img
          src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
          alt=""
        /></SplideSlide>)})}
        </Splide>)}
    </div>
  )
}

export default Slider