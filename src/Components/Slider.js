import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Loader from './Loader';
import Error from './Error';
import { useFetch } from '../Hooks/useFetch';

function Slider() {
  const [Data,Error,Loading]=useFetch("movie/now_playing",{Page:1});
  let splideOptions = {
    heightRatio: 0.5,
    pagination: true,
    speed: 500,
    cover: true,
    padding: "15vw",
    breakpoints: {
      640: {
        heightRatio: 0.54,
        arrows: false,
        pagination: true,
        padding: "0",
      },
    },
  };
  return (
    <div className='movieSlider'>
        {Error?<Error/>:(Loading? <Loader/>:(
        <Splide options={splideOptions}>
        {Data?.results?.map((e)=>{return(
        <SplideSlide key={e.id}><img
          src={`https://image.tmdb.org/t/p/w1280/${e.backdrop_path}`}
          alt={e.title}
        /> <div className="slideCaption">
        <h2>{e.title}</h2>
        </div>
        </SplideSlide>)})}
        </Splide>))}
    </div>
  )
}

export default Slider






















// using Hooks
// const [popMovies, setMovies] = useState([]);
  // const [Loading, setLoading] = useState(true);
  // const [Error, setError] = useState('');
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.themoviedb.org/3/movie/now_playing",
  //     params: {
  //       api_key: "0ada35bf73cf143eda08f5ff4af625f9",
  //       page: 1,
  //     },
  //   })
  //     .then(({ data }) => {
  //       setMovies(data.results);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //        setLoading(false);
  //        setError(e.message);
  //     });
  // }, []);