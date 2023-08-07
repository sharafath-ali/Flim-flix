import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Layout from "./Components/Layout";
import { Route,Routes } from "react-router-dom";
import MovieInfo from './Pages/MovieInfo'
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/movie/:id" element={<MovieInfo/>}/>
        </Routes>
        </Layout>
    </div>
  );
}

export default App;
