import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios'; 
import CharacterList from './CharacterList';


const PUBLICKEY = '5e83269ec051b7b758ac278f046cd828'
const HASH = '64f08731fe7f0838f63d642c3c93361a'

function CharacterDetails() {
    const [ details, setDetails ] = useState([])
    useEffect(() => {
        async function getDetails() {
            let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLICKEY}&hash=${HASH}`
            console.log(url)
            let response = await axios.get(url)
            setDetails(response.data.data.results)
            
            
        }
        getDetails()
        // console.log(setDetails.map)
    }, []
)
  return (
    <div>
        <p>hello</p>
      <ul>

            {details.map((detail) => (
             <li key={detail.id}>
                <img onClick={(event) =>handleClick(detail.id)} src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}/> 

                 <h2>{detail.name}</h2>
                 <p>{detail.description || 'No description available'}</p>
                 <p>{detail.comics.items.name}</p>
             </li>
            ))}
            </ul>

    </div>
  )
}

export default CharacterDetails
