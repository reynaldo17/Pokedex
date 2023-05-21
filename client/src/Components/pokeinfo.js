// In Pokeinfo.js file
import React from "react";

const Pokeinfo = ({ data }) => {
  if (!data) {
    return null;
  }

  const { name, abilities, stats } = data;

  return (
    <>
      <h1>{name}</h1>
      <div className="abilities">
        {abilities.map((poke) => (
          <div className="group" key={poke.ability.name}>
            <h2>{poke.ability.name}</h2>
          </div>
        ))}
      </div>
      <div className="base-stat">
        {stats.map((poke) => (
          <h3 key={poke.stat.name}>
            {poke.stat.name}: {poke.base_stat}
          </h3>
        ))}
      </div>
    </>
  );
};

export default Pokeinfo;


