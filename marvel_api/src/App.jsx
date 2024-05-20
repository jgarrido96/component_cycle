import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'
import Comics from './components/Comics'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  // const characterId = 

  return (
    <div className="app-container">
      <Routes>
        {/* all different pages now instead of inside a component */}
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<CharacterList /> } /> 
        <Route path='/character-details' element={<CharacterDetails characterId={CharacterList()}/>} />
        <Route path='/comics' element={<Comics />} />
        {/* catch all the other paths not associated with a page */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
