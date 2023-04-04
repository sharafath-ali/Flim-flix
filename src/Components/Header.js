import React from "react";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="appHeader">
          <div className="headerLeft">
            <h1>ReactFLIX</h1>
          </div>
          <div className="searchBox">
            <input className="searchField" type="search" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
