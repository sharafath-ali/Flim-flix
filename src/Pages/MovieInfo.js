import React, { useMemo } from 'react'
import { useParams} from 'react-router-dom'
import  {useFetch} from '../Hooks/useFetch'
import Wrapper from '../Components/Wrapper';
import { Backdrop } from '@mui/material';
function MovieInfo() {
   let { id } = useParams();
   const [Data, Error, Loading] =useFetch(`movie/${id}`)
   const backdrop={
    backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${Data.backdrop_path})`
   }
  return (
    <div className='moviePage' style={backdrop}>
     <Wrapper>
       <div className='movieContent'>
        <div className='moviePoster'>
         <img src={`https://image.tmdb.org/t/p/w500/${Data?.poster_path}`}/>
        </div>
        <div className='movieInfo'>
         <div className='movieTitle'>
            <h1>{Data?.title}</h1>
            <h3>{Data?.tagline}</h3>
         </div>
         <div className='moviePlot'>
            {Data?.overview}
         </div>
         <div className='movieDetails'>
           <div className='movieDetailsItem'>
             <h3>Language</h3>
             <div>{Data?.spoken_languages?.map((e)=><span>{e.english_name}</span>)}</div>
           </div>

           <div className='movieDetailsItem'>
             <h3>Genres</h3>
             <div>{Data?.genres?.map((e)=><span key={e.id}>{e.name}</span>)}</div>
           </div>

           <div className='movieDetailsItem'>
             <h3>Runtime</h3>
             <div>{Data?.runtime} Minutes</div>
           </div>

           <div className='movieDetailsItem'>
             <h3>Rating</h3>
             <div>{Data?.vote_average}</div>
           </div>
         </div>
        </div>
       </div>
     </Wrapper>
    </div>
  )
}

export default MovieInfo