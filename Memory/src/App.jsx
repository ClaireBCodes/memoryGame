import { useState } from 'react'
import './App.css'
import { HeaderBar } from './components/HeaderBar'
import { HowToPlay } from './components/HowToPlay'
import { OptionsList } from './components/OptionsList'
import { GameBoard } from './components/GameBoard'
import { Gridof12 } from './components/Gridof12'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderBar />
    <HowToPlay />
    <OptionsList />
    <Gridof12 />
    <GameBoard />

    </>
  )
}

export default App
