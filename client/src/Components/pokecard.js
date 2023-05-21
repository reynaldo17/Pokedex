import React, { useEffect, useState } from "react";

const Card = ({ pokemonUrl, infoPokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonUrl]);

  if (!pokemonData) {
    return null;
  }

  const handleClick = () => {
    infoPokemon(pokemonData);
  };

  return (
    <div className="card" key={pokemonData.id} onClick={handleClick}>
      <h2>{pokemonData.id}</h2>
      <img src={pokemonData.sprites.front_default} alt="" />
      <h2>{pokemonData.name}</h2>
    </div>
  );
};

export default Card;
