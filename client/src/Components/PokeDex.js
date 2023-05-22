import React from 'react';
import './stylesheet.css';

const Pokedex = ({ selectedPokemon }) => {
  const { name, id, types, weight, height, sprites } = selectedPokemon || {};
  const { front_default: frontImage, back_default: backImage } = sprites || {};

  const capitalize = (str) => str[0]?.toUpperCase() + str.substr(1);

  return (
    <div className="leftcontainermainectioncontainer">
      <div className="leftcontainermainsection">
        <div className="mainsectionwhite">
          <div className="mainsectionblack">
            <div className={`mainscreen ${selectedPokemon ? '' : 'hide'}`}>
              <div className="screenheader">
                <span className="pokename">{capitalize(name)}</span>
                <span className="pokeid">#{id?.toString().padStart(3, '0')}</span>
              </div>
              <div className="screenimage">
                <img src={frontImage} className="pokefrontimage" alt="front" />
                <img src={backImage} className="pokeback-image" alt="back" />
              </div>
              <div className="screendescription">
                <div className="statstypes">
                  <span className="poketypeone">{capitalize(types?.[0]?.type?.name)}</span>
                  {types?.[1]?.type && (
                    <span className="poketypetwo">{capitalize(types?.[1]?.type?.name)}</span>
                  )}
                </div>
                <div className="screenstats">
                  <p className="statsweight">
                    weight: <span className="pokeweight">{weight}</span>
                  </p>
                  <p className="statsheight">
                    height: <span className="pokeheight">{height}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

