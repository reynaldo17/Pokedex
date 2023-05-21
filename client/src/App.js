import logo from './Pokédex_logo.png';
import Main from './Components/main';
import './App.css';

function App() {
  return (
    <div>
    <nav>
        <ul class="navbar">
          <li><a href="mylist">My List</a></li>
          {/* <li><a href="">Home</a></li> */}
          <img src={logo} className="app-logo" alt="logo" />
        </ul>
      </nav>
      <div className="container">
        {/* <Main/> */}
      </div>
    </div>
  );
}

export default App;


