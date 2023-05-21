import React, { useState, useEffect } from "react";
import Card from "./pokecard";
import Pokeinfo from "./pokeinfo";
import "./stylesheet.css"; // Import the stylesheet for Main component

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/ditto");
  const [pokeDex, setPokeDex] = useState();

  const fetchPokemonData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokeData(data.results); // Update the pokeData state with an array of Pokemon
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonData();
  }, [url]);

  const handlePreviousClick = () => {
    setUrl(pokeData[0]?.previous);
  };

  const handleNextClick = () => {
    setUrl(pokeData[0]?.next);
  };

  return (
    <div className="container">
      <div className="left-content">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="card-container">
            {pokeData.map((pokemon) => (
              <Card
                key={pokemon.name}
                pokemonUrl={pokemon.url}
                infoPokemon={setPokeDex}
              />
            ))}
          </div>
        )}
        <div className="btn-group">
          <button onClick={handlePreviousClick} disabled={!pokeData[0]?.previous}>
            Previous
          </button>

          <button onClick={handleNextClick} disabled={!pokeData[0]?.next}>
            Next
          </button>
        </div>
      </div>
      <div className="right-content">
        <Pokeinfo data={pokeDex} />
      </div>
    </div>
  );
};

export default Main;