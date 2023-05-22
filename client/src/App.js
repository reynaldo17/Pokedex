import React from 'react';
import logo from './Pokédex_logo.png';
import Pokedex from './components/Pokedex';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li><a href="mylist">My List</a></li>
          <img src={logo} className="app-logo" alt="logo" />
        </ul>
      </nav>
      <div><Pokedex /></div>
    </div>
  );
}

export default App;



