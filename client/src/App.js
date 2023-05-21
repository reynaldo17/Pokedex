import React from 'react';
import logo from './Pokédex_logo.png';
import Main from './components/main';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li><a href="mylist">My List</a></li>
          {/* <li><a href="">Home</a></li> */}
          <img src={logo} className="app-logo" alt="logo" />
        </ul>
      </nav>
        {/* <Main /> */}
    </div>
  );
}

export default App;



