import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <h1>{data.name}</h1>
          <div className="abilities">
            {data.abilities.map((poke) => (
              <div className="group" key={poke.ability.name}>
                <h2>{poke.ability.name}</h2>
              </div>
            ))}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => (
              <h3 key={poke.stat.name}>
                {poke.stat.name}:{poke.base_stat}
              </h3>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Pokeinfo;

