import React from "react";
/* Search React Component Created */
const SearchComponent = ({handleButton}) => {
 
  return (
    <div>
      <form>
        {/* bootstrap 4 classes added to style the search component */}
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
              /* OnClick event handler implemented */
              onClick={handleButton}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchComponent;
