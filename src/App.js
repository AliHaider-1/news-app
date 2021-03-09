import './App.css';
import SearchComponent from './SearchComponent';
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";


function App() {
//variable & useState variable declaration.
 let [state,setState] =useState("");
 let [title, setTitle] = useState("Top 10 Headlines of US");
 let input = document.getElementById("input");
 const [isLoading, setIsLoading] = useState(true);
 let [url, setUrl] = useState(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=3ce1a4e5cf594ca7bd6ae27af898c3a1"
     );
 const [dataArr, setDataArr] = useState(""); 
 

   //function to handle search button in the app.
   function handleButton(e) {
      e.preventDefault();
         setUrl(
         `https://newsapi.org/v2/everything?q=${input.value}&apiKey=533137d100fe476da2cf7915337b04a3`
            );
        setTitle(`Showing news articles related to ${input.value}`)
       console.log(input.value);
   }


   //fetching API using useEffect and Fetch
  useEffect(() => {
   const fetchData = async () => {
    try {
      //requests send through localhost is working fine.
      //cors enabled is applied to try to fetch the API through browser but the API free developer plan does not allow to send requests
      //through browser. To send request through browser we need to upgrade the plan. 
      const response = await fetch(url,{
        method: 'GET',
        cache: 'no-cache',
        mode:'cors',});
      if (response === undefined) {
        setIsLoading(true);

          /*Error handling is implemented */
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


       //logic implemented to display only first 10 news articles related to search word.
        const list = dataArr;
        const size = 10;
        const items = list.slice(0, size);
        
        
  return (
    <div className="App">
      {/*App header created*/}
      <header className="App-header">
        {/*BT header Logo*/}
        <img
          src="https://img01.bt.co.uk/s/assets/191120/images/logo/logo-2018.svg"
          className="App-logo"
          alt="logo"
        />
        {/*APP header title*/}
        <h2>Search News articles</h2>
      </header>

      {/*APP main section created*/}
      <main>
        <section className="App-section">
          <h1 className="p-1">BT React Code Test - by John Doe - #/01/21</h1>

          {/*Search React Component added to App*/}
          <SearchComponent handleButton={handleButton} />

          {/*Error handling logic implemented to display error if fetching API have issues else display news articles */}
          {isLoading ? (
            <div>
              Loading ...
              <h3> ERROR:_ {state} </h3>
            </div>
          ) : (
            <div className="">
              <h4 className="p-2">{title}</h4>
              <div className="m-1 d-flex justify-content-center row ">
                {/*Array Map implemented to display the API data */}
                {items.map((user, index) => (
                  <div key={index}>
                    {/*React Bootstrap Card Element is used to display news articles in Cards */}
                    <Card
                      className="m-1"
                      style={{ width: "16rem", height: "38rem" }}
                    >
                      <Card.Img
                        variant="top"
                        src={user.urlToImage}
                        style={{ height: "12rem" }}
                        alt={user.title}
                      />
                      <Card.Title className="p-1">
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
      </main>

      {/*extra space added to the bottom of the app so content will no get hide behind footer*/}
      <div className="extraSpace"></div>

      {/*Footer is added to App*/}
      <footer className="App-footer">
        <h5> © BT 2021</h5>
      </footer>
    </div>
  );
}

export default App;
