import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import  logo  from '../Assets/logo.svg'
function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
           <Link to={'/'}><img src={logo} width={96}/></Link>
           <Link to={'/favorites'}><h2>Favorites</h2></Link>
          </div>
          <div className="searchBox">
            <input className="searchField" type="search" />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
