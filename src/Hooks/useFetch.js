import { useEffect,useState } from 'react';
import axios from 'axios';


export function useFetch(url,customparam={}) {
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState("");
    const [Data,setData]=useState([])

    useEffect(() => {
        axios({
          method: "get",
          baseURL:'https://api.themoviedb.org/3/',
          url,
          params: {
            api_key: "0ada35bf73cf143eda08f5ff4af625f9",
            ...customparam,
          },
        })
          .then(({ data }) => {
            setData(data);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e.message);
             setLoading(false);
             setError(e.message);
          });
      }, [customparam.page,customparam.query,url]);

      return [Data,Error,Loading];
}

