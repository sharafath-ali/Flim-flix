import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import logo from '../Assets/logo.svg'
import SearchBox from './SearchBox' 
//import app context
function Header() {
  //state .length +1
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={'/'}><img src={logo} width={96} /></Link>
            <Link to={'/favorites'}><div className="favCount"><span className="count">0</span>Favorites</div></Link>
          </div>
          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
