import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokeapiTypes() {

  const [types , setTypes] = useState([])

  

  useEffect(() => {
    const fetchTypes = async () => {
      await axios('https://pokeapi.co/api/v2/type')
      .then(response => response.data).then(data => {
        const type = data.results
        setTypes(type.map(item => <li key={item.name}>{item.name}</li>))
      })
     
    }

    fetchTypes()
    
  })

  return (
    <>
      <h1>Types</h1>
      <ul>{types}</ul>
    </>
  );
}

