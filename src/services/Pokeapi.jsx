import React, { useEffect, useState } from 'react';
import axios from 'axios';
// const urlType = "https://pokeapi.co/api/v2/type/";
// const urlRegion = "https://pokeapi.co/api/v2/region/";


export default function Pokeapi() {

const [pokemon, setPokemon] = useState([])

  
useEffect( () => {
  axios("https://pokeapi.co/api/v2/pokemon/")
  .then(request => request.data)
  .then(data => {
    const pokemons = data.results 
    setPokemon(pokemons)
  })
}, []) 
  
  return (
    <>
      <h1>pokemons</h1>
      <ul>
        {pokemon.map(items => (
          <li key={items.name}> {items.name} </li>
        ))}
      </ul>
    </>
  );
}
 
