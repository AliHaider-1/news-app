import React from "react";


const SearchComponent = ({handleInput,handleButton}) => {
 
  return (
    <div>
      <form>
        <input
          type="search"
          id="input"
          placeholder="Search News Articles"
          onChange={handleInput}
        ></input>
        <button type="submit" onClick={handleButton}>
          Search
        </button>
        <div>
          <h1></h1>
        </div>
      </form>
    </div>
  );
};
export default SearchComponent;
