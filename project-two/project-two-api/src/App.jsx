import { useEffect } from 'react';
import { useState } from 'react';

import './sass/App.scss';
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

import { Button } from './components/Button';
import { Card } from './components/Card';

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonEvolutions, setPokemonEvolutions] = useState([]);

  useEffect(()=>{
    getEvolutions(pokemonId);
    console.log('valor al actualizar el estado: ' + pokemonId);
  },[pokemonId]);

  // Fetch
  async function getEvolutions(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
    const data = await response.json()

    let pokemonEvoArray = [];

    let pokemonLv1 = data.chain.species.name;
    let pokemonLv1Img = await getPokemonImg(pokemonLv1);
    pokemonEvoArray.push([pokemonLv1, pokemonLv1Img]);

    if(data.chain.evolves_to.length !== 0){
      let pokemonLv2 = data.chain.evolves_to[0].species.name;
      let pokemonLv2Img = await getPokemonImg(pokemonLv2);
      pokemonEvoArray.push([pokemonLv2, pokemonLv2Img]);
      

      if(data.chain.evolves_to[0].evolves_to.length !== 0){
        let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonLv3Img = await getPokemonImg(pokemonLv3);
        pokemonEvoArray.push([pokemonLv3, pokemonLv3Img]);
      }
    }
    setPokemonEvolutions(pokemonEvoArray);
  }

  async function getPokemonImg(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()
    return data.sprites.other['official-artwork'].front_default;
  }
  // ---

  // Clicks functions
  function prevClick() {
    (pokemonId === 1)? setPokemonId(1): setPokemonId(pokemonId -1)
  }

  function nextClick() {
    setPokemonId(pokemonId +1)
  }
  // ---

  return (
    <div className='app'>
      <div className={`card-container card${pokemonEvolutions.length}`}>
        {pokemonEvolutions.map(pokemon => 
           <Card
             key={pokemon[0]}
             name={pokemon[0]}
             img={pokemon[1]}
            />)}
      </div>
      <div className="buttons-container">
          <Button 
            arrow={<TiArrowLeftOutline />} 
            handleClick={prevClick} 
          />
          <Button 
            arrow={<TiArrowRightOutline />}
            handleClick={nextClick} 
          />
      </div>
    </div>
  )
}

export default App;