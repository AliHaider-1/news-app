import React from "react";


const SearchComponent = ({handleButton}) => {
 
  return (
    <div>
      <form>
        <input
          type="search"
          id="input"
          placeholder="Search News Articles"
        ></input>
        <button type="submit" onClick={handleButton}>
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchComponent;
