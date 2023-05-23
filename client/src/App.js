import React, { useState } from 'react';
import logo from './Pokédex_logo.png';
import Pokedex from './components/Pokedex';
import FavoritePokemon from './components/myfavoritelist';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('pokedex');
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <button onClick={() => handleNavigation('pokedex')}>Pokedex</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('favoritepokemon')}>Favorite Pokemon</button>
          </li>
          <img src={logo} className="app-logo" alt="logo" />
        </ul>
      </nav>
      {currentPage === 'pokedex' ? <Pokedex favorites={favorites} /> : <FavoritePokemon favorites={favorites} />}
    </div>
  );
}

export default App;

