import React, { useEffect, useState } from 'react';
import PokeList from './PokeList';
import Pokedex from './PokeDex';
import './stylesheet.css';

  const Main = () => {
    const [pokeList, setPokeList] = useState([]);
    const [prevUrl, setPrevUrl] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
    fetchPokeList('https://pokeapi.co/api/v2/pokemon/ditto');
    }, []);

  const fetchPokeList = (url) => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { results, previous, next } = data;
        setPokeList(results);
        setPrevUrl(previous);
        setNextUrl(next);
    });
  };

  const handleLeftButtonClick = () => {
    if (prevUrl) {
      fetchPokeList(prevUrl);
    }
  };

  const handleRightButtonClick = () => {
    if (nextUrl) {
      fetchPokeList(nextUrl);
    }
  };

  const handleListItemClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
  <div className="pokedex">
    <div className="leftontainer">
    <Pokedex selectedPokemon={selectedPokemon} />
    </div>
      <div className="rightcontainer">
        <PokeList
              pokeList={pokeList}
              onListItemClick={handleListItemClick}
              onLeftButtonClick={handleLeftButtonClick}
              onRightButtonClick={handleRightButtonClick}
            />
    </div>
  </div>
  );
  };

export default Main;