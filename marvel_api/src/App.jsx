import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CharacterList/>
      {/* <CharacterDetails/> */}
    </div>
  )
}

export default App
