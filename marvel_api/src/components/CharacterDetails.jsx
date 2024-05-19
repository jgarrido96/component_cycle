import React, { useState, useEffect } from 'react';
import '../App.css'
import axios from 'axios'; 
import CharacterList from './CharacterList';
// import { Form, FloatingLabel, Button, Modal } from 'react-bootstrap';


const PUBLICKEY = '5e83269ec051b7b758ac278f046cd828'
const HASH = '64f08731fe7f0838f63d642c3c93361a'

// functional component 
export default function CharacterDetails(characterId) {
    console.log(characterId)
    const [details, setDetails] = useState([])
    useEffect(() => {
        async function getDetails() {
            let url = `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${PUBLICKEY}&hash=${HASH}`
            console.log(url)
            let response = await axios.get(url)
            setDetails(response.data.data.results)
            
            
        }
        getDetails(characterId)
        // console.log(setDetails.map)
    }, []
)
return (
    <div class='Character-Details'>
      {details.map(c=>
      <>
      <h2>{c.name}</h2>
      <p>{c.description}</p>
      <p>{c.comics.items}</p>
      </>)}
    </div>
  )
}
