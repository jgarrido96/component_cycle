import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios'; 
import CharacterDetails from './CharacterDetails';

export default function newGuy () {
    const App = () => {
        const handleClick = (event, message) => {
        // 👇️ Refers to the image element
        console.log(event.target);
    
        console.log(message);
    
        console.log('Image clicked');
        };
    }
}