const searchPokemon = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
  
    // Extract the desired information from the retrieved data
    const name = data.name;
    const type = data.types.map((type) => type.type.name);
    const image = data.sprites.front_default;
  
    // Create an object containing the retrieved information
    const pokemonInfo = {
      name: name,
      type: type,
      image: image
    };
  
    return pokemonInfo;
  };
  
  export default searchPokemon;
  