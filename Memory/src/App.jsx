import './App.css'
import { HeaderBar } from './components/HeaderBar'
import { HowToPlay } from './components/HowToPlay'
import { OptionsList } from './components/OptionsList'
import { GameBoard } from './components/GameBoard'
import { Gridof12 } from './components/Gridof12'
import gameLogic from './gameLogic/gameLogic'

function App() {

  return (
    <>
      <gameLogic>
        <HeaderBar />
        <HowToPlay />
        <OptionsList />
        <Gridof12 />
        <GameBoard />
      </gameLogic>
    </>
  );
}

export default App
