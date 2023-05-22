import React from 'react';

const FavoritePokemon = ({ favorites }) => {
  return (
    <div>
      <h1>Favorite Pokemon</h1>
      {favorites.length === 0 ? (
        <p>No favorite Pokémon added yet.</p>
      ) : (
        <ul>
          {favorites.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritePokemon;

