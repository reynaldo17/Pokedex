import React from 'react';
import logo from './Pokédex_logo.png';
import Main from './components/main';
// import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li><a href="mylist">My List</a></li>
          <img src={logo} className="app-logo" alt="logo" />
        </ul>
      </nav>
      <div><Main /></div>
    </div>
  );
}

export default App;



