import React, { useEffect, useState ,useMemo } from "react";

function Main({children}) {
  

  return (
    <main>
      {children}
    </main>
  );
}

export default Main;


// const [popMovies, setMovies] = useState([]);
  // const [TotalPages, setTotalPages] = useState(null);
  // const [Loading, setLoading] = useState(true);
  // const [Error, setError] = useState('');
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.themoviedb.org/3/movie/popular",
  //     params: {
  //       api_key: "0ada35bf73cf143eda08f5ff4af625f9",
  //       page: Page,
  //     },
  //   })
  //     .then(({ data }) => {
  //       setMovies(data.results);
  //       setTotalPages(data.total_pages);
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //       setLoading(false);
  //       setError(e.message);
  //     });
  // }, [Page]);