import React, { useState, useEffect } from 'react';

const FavoritePokemon = ({ favorites }) => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const details = await Promise.all(favorites.map(pokemon => fetchPokemonData(pokemon.url)));
      setPokemonDetails(details);
    };

    fetchPokemonDetails();
  }, [favorites]);

  const fetchPokemonData = async (url) => {
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

  if (favorites.length === 0) {
    return (
      <div>
        <h1>Favorite Pokemon</h1>
        <p>No favorite Pokémon added yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Favorite Pokemon</h1>
      <div className="pokemon-list">
        {pokemonDetails.map((pokemon, index) => (
          <div className="pokemon-card" key={index}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <div className="pokemon-details">
              <p><strong>Name:</strong> {capitalizeFirstLetter(pokemon.name)}</p>
              <p><strong>Type:</strong> {pokemon.types.map(type => capitalizeFirstLetter(type.type.name)).join(', ')}</p>
              <p><strong>Stats:</strong></p>
              <ul>
                {pokemon.stats.map(stat => (
                  <li key={stat.stat.name}>
                    {capitalizeFirstLetter(stat.stat.name)}: {stat.base_stat}
                  </li>
                ))}
              </ul>
              <p><strong>Attacks:</strong></p>
              <ul>
                {pokemon.moves.slice(0, 4).map(move => (
                  <li key={move.move.name}>
                    {capitalizeFirstLetter(move.move.name)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePokemon;
