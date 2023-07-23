import React from "react";
import Wrapper from "./Wrapper";

function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <h1>ReactFLIX</h1>
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
