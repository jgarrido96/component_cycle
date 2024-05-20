import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios'; 


const PUBLICKEY = '5e83269ec051b7b758ac278f046cd828'
const HASH = '64f08731fe7f0838f63d642c3c93361a'


function CharacterList() {
    const [characters, setCharacters] = useState([])
        
    useEffect(() => {
        async function getCharacters() {
            let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLICKEY}&hash=${HASH}`
            console.log(url)
            let response = await axios.get(url)
            setCharacters(response.data.data.results)
        }
        getCharacters()
    }, []
    
)

return (
<div>
      <h1>Marvel Characters</h1>
      <ul>

        {characters.map((character) => (
          <li key={character.id}>
            {/* I can't get this call to CharacterDetails to work 
            I tried a handle click, and calling directly from the img tag, and none worked*/}
          <img onClick={(event) =>handleClick(character.id)} src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/> 
            {/* <img onClick={(event) =>CharacterDetails(character.id)} src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>  */}

            <h2>{character.name}</h2>
            <p>{character.description || 'No description available'}</p>
            <p>{character.comics.items.name}</p>
          </li>
        ))}
      </ul>
    </div>

      )
    }
export default CharacterList