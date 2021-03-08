import './App.css';
import SearchComponent from './SearchComponent';
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";


function App() {
  let [searchInput, setSearchInput] = useState("");

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
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=3ce1a4e5cf594ca7bd6ae27af898c3a1",
        {
          method: "get",
          headers: new Headers({
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          }),
        }
      );
      if (response === undefined) {
        setIsLoading(true);
      } else {
        const data = await response.json();
        setDataArr(data.articles);	
        console.log(data);
        setIsLoading(false);
        
      }
     
    } catch (error) {
      console.log(error.message);
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
          <div>Loading ...</div>
        ) : (
          <div className="row m-3 p-2">
            {dataArr.map((user) => (
              <div>
                <Card style={{ width: "20rem", height: "40rem" }}>
                  <Card.Img
                    variant="top"
                    src={user.urlToImage}
                    style={{  height: "12rem" }}
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
