import './App.css';
import SearchComponent from './SearchComponent';
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";


function App() {

 let [state,setState] =useState("");
 let [title, setTitle] = useState("Top 10 Headlines of US");


   let input = document.getElementById("input");
  
   function handleButton(e) {
    e.preventDefault();
    setUrl(
      `https://newsapi.org/v2/everything?q=${input.value}&apiKey=533137d100fe476da2cf7915337b04a3`
    );
    setTitle(`Showing news articles related to ${input.value}`)
    console.log(input.value);
   }

    const [isLoading, setIsLoading] = useState(true);
    let [url, setUrl] = useState("https://newsapi.org/v2/top-headlines?country=us&apiKey=3ce1a4e5cf594ca7bd6ae27af898c3a1");
 
    const [dataArr, setDataArr] = useState("");
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url,{
method: 'GET',
cache: 'no-cache',
mode:'cors',});
      if (response === undefined) {
        setIsLoading(true);
      } else if (response.status >= 400) {
        setIsLoading(true);
        setState("ERROR:_ "+response.status+" "+response.message);
      } else {
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
  fetchData();
}, [url]);
        const list = dataArr;
        const size = 10;
        const items = list.slice(0, size);
        
        
          
          
        

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

        <SearchComponent handleButton={handleButton} />

        {isLoading ? (
          <div>
            Loading ...
            <h3> ERROR:_ {state} </h3>
          </div>
        ) : (
          <div>
            <h4>{title}</h4>
            <div className="row m-3 p-2">
              {items.map((user, index) => (
                <div key={index}>
                  <Card style={{ width: "20rem", height: "40rem" }}>
                    <Card.Img
                      variant="top"
                      src={user.urlToImage}
                      style={{ height: "12rem" }}
                      alt={user.title}
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
