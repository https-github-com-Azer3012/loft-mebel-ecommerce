import React from "react";
import "./styles.scss";
import searchIcon from "../../assets/search-icon.png";
function Search() {
  return (
    <div className="search">
      <img src={searchIcon} alt={searchIcon} />
      <input type="text" placeholder="Axtar" />
    </div>
  );
}

export default Search;
