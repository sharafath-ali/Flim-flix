import React ,{useContext} from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import logo from '../Assets/logo.svg'
import SearchBox from './SearchBox' 
import { AppContext } from '../Context/AppGlobalState'

//import app context
function Header() {
  //state .length +1
  const { state, dispatch } = useContext(AppContext);
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={'/'}><img src={logo} width={96} /></Link>
            <Link to={'/favorites'}><div className="favCount"><span className="count">{state?.favorites?.length>0?state?.favorites?.length+1:0}</span>Favorites</div></Link>
          </div>
          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
