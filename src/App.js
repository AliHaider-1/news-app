import './App.css';
import SearchComponent from './SearchComponent';
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";


function App() {
  let [searchInput, setSearchInput] = useState("");

 let [state,setState] =useState("");


  function handleInput(e) {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  }

   let input = document.getElementById("input");
  
   function handleButton(e) {
    e.preventDefault();
    setSearchInput(input.value);
    console.log(input.value);
   }

    const [isLoading, setIsLoading] = useState(true);
 
    const [dataArr, setDataArr] = useState("");
useEffect(() => {
    fetchData();
  }, []);
//fetching the api
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=3ce1a4e5cf594ca7bd6ae27af898c3a1"
      );
      if (response === undefined) {
        setIsLoading(true);
      } 
       else if (response.status >= 400) {
         setIsLoading(true);
         setState(response.status + " Bad Request ");
       } 
        else {
         const data = await response.json();
         setDataArr(data.articles);
         console.log(data);
         setIsLoading(false);
       }
     
    } catch (err) {
      setState(err.message);
     console.log(err.message);
     
    }
  };
  
        
      
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

        <SearchComponent
          handleInput={handleInput}
          handleButton={handleButton}
        />

        {isLoading ? (
          
          <div>
            Loading ...
            <h3> ERROR:_ {state} </h3>
          </div>
          
        ) : (
 <div className="row m-3 p-2">
            {dataArr.map((user) => (
              <div>
                <Card
                  key={user.name}
                  style={{ width: "20rem", height: "40rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={user.urlToImage}
                    style={{ height: "12rem" }}
                  />
                  <Card.Title>
                    <strong>{user.title}</strong>
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>{user.description}</Card.Text>
                  </Card.Body>
                  <a href={user.url} className="btn btn-primary">
                    Goto Official Page
                  </a>
                </Card>
              </div>
            ))}
          </div>
        )}
      </section>
      <div className="extraSpace"></div>
      <footer className="App-footer">
        <h5> © BT 2021</h5>
      </footer>
    </div>
  );
}

export default App;
