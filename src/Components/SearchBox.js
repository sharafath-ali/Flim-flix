import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function SearchBox() {
    const navigate = useNavigate()
    const [Query, setQuery] = useState('');
    const [Delayedquery, setDelayedquery] = useState('')
    const [Data, Error, Loading] = useFetch("search/movie", { query: Delayedquery });

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedquery(Query)
        }, [1000])
        return ()=>{
            clearTimeout(timer)
        }
    }, [Query])

    return (
        <div className="searchBox">
            <input className="searchField" value={Query} type="search" onChange={(e) => setQuery(e.target.value)} />
            <div className='resultBox'>
                <ul>
                    {Data?.results?.map((result) =>
                        <li key={result.id}>
                            {/* onClick={()=>{navigate(`movie/${result.id}`)}}> */}
                            <Link to={`movie/${result.id}`}>{result.title}</Link>
                            {/* {result.title} */}
                        </li>)}
                </ul>
            </div>
        </div>

    )
}

export default SearchBox