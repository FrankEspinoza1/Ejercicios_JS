$(document).ready(() => {
    const $select = $("#pokemons-selector");
    const $pokemonImg = $("#pokemon-img");
    const $pokemonName = $("#pokemon-name");
  
    async function requestPokemos(num) {
      let response = await fetch(`https://pokeapi.co/api/v2/generation/${num}`);
      let data = await response.json();
      // console.log(data);
  
      //pokemon_species --> es un array
      let pokemonSpecies = data.pokemon_species;
      // console.log(pokemonSpecies);
  
      pokemonSpecies.forEach((pokemon) => {
        let name = pokemon.name;
        // console.log(name);
  
        //Creamos un option por cada nombre
        const $option = $(`<option>${name}</option>`);
  
        $select.append($option);
      });
    }
  
    requestPokemos(1);
  
    $select.on("change", async (e) => {
      console.log(e.target.value);
  
      $pokemonName.text(e.target.value);
  
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${e.target.value}`
      );
  
      let data = await response.json();
      console.log(data);
      let urlImg = data.sprites.front_default;
      $pokemonImg.attr("src", urlImg);
    });
  });
  