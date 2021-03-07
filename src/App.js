import './App.css';
import SearchComponent from './SearchComponent';
import { useState, useEffect } from "react";

function App() {
 
  let [searchInput, setSearchInput] = useState("");

  function handleInput(e) {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  }

  function handleButton(e){
    let input = document.getElementById("input");
    e.preventDefault();
    setSearchInput(input.value);
    console.log(input.value);
  }




  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg"
          className="App-logo"
          alt="logo"
        />
        <h2>Search News articles</h2>
      </header>
      <section className="App-section">
        <h1>BT React Code Test - by John Doe - #/01/21</h1>
        <SearchComponent handleInput={handleInput} handleButton={handleButton}/>

      </section>
      <footer className="App-footer">
        <h5> © BT 2021</h5>
      </footer>
    </div>
  );
}

export default App;
