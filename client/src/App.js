import './App.css';
import logo from './Pokédex_logo.png';

function App() {
  return (
    // <div class="title">
    //   <div class="titleleft">
    //   <img src={logo} className="app-logo" alt="logo" />
    //   <div className="buttons">
    //     <button type="button">Home</button>
    //     <button type="button">My List</button>
    //   </div>
    //   </div>
    // </div>
    <nav>
      <ul class="navbar">
        <li><a href="#">My List</a></li>
        <li><a href="">Home</a></li>
        <img src={logo} className="app-logo" alt="logo" />
      </ul>
    </nav>
  );
}

export default App;
