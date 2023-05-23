import React, { useState, useEffect } from 'react';
import './style.css';

const Pokedex = ({ favorites }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.log(error));
  }, []);

  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddFavorite = (pokemon) => {
    const isPokemonAlreadyAdded = favorites.some((favorite) => favorite.name === pokemon.name);
  
    if (!isPokemonAlreadyAdded) {
      const updatedFavorites = [...favorites, pokemon];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };  
  

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const PokemonDetails = ({ pokemon }) => {
    const { name, url } = pokemon;
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
      fetchPokemonDetails(url)
        .then(data => setPokemonDetails(data))
        .catch(error => console.log(error));
    }, [url]);

    if (!pokemonDetails) {
      return null;
    }

    const { types, stats, moves } = pokemonDetails;

    return (
      <div className="pokemon-details">
        <p><strong>Name:</strong> {capitalizeFirstLetter(name)}</p>
        <p><strong>Type:</strong> {types.map(type => capitalizeFirstLetter(type.type.name)).join(', ')}</p>
        <p><strong>Stats:</strong></p>
        <ul>
          {stats.map(stat => (
            <li key={stat.stat.name}>
              {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
            </li>
          ))}
        </ul>
        <p><strong>Attacks:</strong></p>
        <ul>
          {moves.slice(0, 4).map(move => (
            <li key={move.move.name}>
              {capitalizeFirstLetter(move.move.name)}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="pokedex">
      <h1>First Generation Pokemon</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="pokemon-list">
        {filteredPokemonList.map(pokemon => (
          <div className="pokemon-card" key={pokemon.name}>
            <button className="add-symbol" onClick={() => handleAddFavorite(pokemon)}>+</button>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              alt={pokemon.name}
            />
            <PokemonDetails pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
