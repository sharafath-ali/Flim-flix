import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import  logo  from '../Assets/logo.svg'
import SearchBox from './SearchBox'
function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
           <Link to={'/'}><img src={logo} width={96}/></Link>
           <Link to={'/favorites'}><h2>Favorites</h2></Link>
          </div>
          <SearchBox/>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
