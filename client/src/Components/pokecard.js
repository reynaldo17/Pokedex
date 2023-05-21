import React, { useEffect, useState } from "react";

const Card = ({ pokemonUrl, infoPokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(pokemonUrl);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, [pokemonUrl]);

  return (
    <>
      {pokemonData && (
        <div
          className="card"
          key={pokemonData.id}
          onClick={() => infoPokemon(pokemonData)}
        >
          <h2>{pokemonData.id}</h2>
          <img src={pokemonData.sprites.front_default} alt="" />
          <h2>{pokemonData.name}</h2>
        </div>
      )}
    </>
  );
};

export default Card;

