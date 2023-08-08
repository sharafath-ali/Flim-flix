import React , {useState} from 'react'
import Slider from '../Components/Slider';
import Wrapper from '../Components/Wrapper';
import Loader from '../Components/Loader';
import Pagination from '../Components/Pagination';
import ErrorMessage from "../Components/Error";
import Moviecard from '../Components/Moviecard';
import { useFetch } from '../Hooks/useFetch';
function Home() {

    const [Page, setPage] = useState(1);
    const [Data, Error, Loading] = useFetch("movie/popular", { page : Page });
    const { results } = Data
    
    return (
        <>
        {Page===1 &&<Slider/>}
      <Wrapper>
        <h2 className="sectionTitle">Popular Movies </h2>
        {Error && (<ErrorMessage Error={Error}/>)}
        {!Error&&(Loading ? (
            <Loader/>
          ) : (
            <div className="gallery">
            {results?.map((movie) => {
              return <Moviecard key={movie.id} e={movie} />;
            })}
            </div>
          ))}
        
        <Pagination total={Data?.total_pages} page={Page} setPage={setPage} />
      </Wrapper>
        </>
    )
}

export default Home