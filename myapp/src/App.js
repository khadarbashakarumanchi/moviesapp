import logo from './logo.svg';
import './App.css';
import movie1 from "./images/movie1.jpg";
import movie2 from "./images/movie2.jpg";
import movie3 from "./images/movie3.jpg";
import movie4 from "./images/movie4.jpg";

export default function App() {
  let button = <button className = "btn"> sign in</button>
  return (
    <div className="App">
      <header className="App-header">
        {/*<h1 style = {{color:"red"}}>Hello khadarbasha</h1>
        
  {button}*/}

        <h1>Movie world</h1>
        <div className = "movepro">
          <img src = {movie1} alt = "movie 1"/>  
          <img src = {movie2} alt = "movie 2"/>
          <img src = {movie3} alt = "movie 3"/>
          <img src = {movie4} alt = "movie 4"/>
        </div>


      </header>
    </div>
  );
}

