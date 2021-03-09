import React from "react";


const SearchComponent = ({handleButton}) => {
 
  return (
    <div>
      <form>
        <div class="container input-group">
          <input
            type="search"
            class="form-control"
            id="input"
            placeholder="Search News Articles"
          ></input>
          <div class="input-group-append">
            <button
              class="btn btn-primary"
              type="submit"
              onClick={handleButton}
            >
              Search
            </button>
          </div>{" "}
        </div>
      </form>
    </div>
  );
};
export default SearchComponent;
