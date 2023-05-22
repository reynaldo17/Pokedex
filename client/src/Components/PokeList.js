import React from 'react';
import './stylesheet.css';

const PokeList = ({
  pokeList,
  onListItemClick,
  onLeftButtonClick,
  onRightButtonClick,
}) => {
  return (
    <div className="rightcontainerblack">
      <div className="rightcontainerscreen">
        {pokeList.map((pokemon, index) => (
          <div
            className="listitem"
            key={index}
            onClick={() => onListItemClick(pokemon)}
          >
            {pokemon.name}
          </div>
        ))}
      </div>
      <div className="rightcontainerbuttons">
        <div className="leftbutton" onClick={onLeftButtonClick}>
          Prev
        </div>
        <div className="rightbutton" onClick={onRightButtonClick}>
          Next
        </div>
      </div>
    </div>
  );
};

export default PokeList;
