import "./App.css";
import { HeaderBar } from "./components/HeaderBar";
import { HowToPlay } from "./components/HowToPlay";
import { OptionsList } from "./components/OptionsList";
import { GameBoard } from "./components/GameBoard";
import { Gridof12 } from "./components/Gridof12";
import { GameLogic } from "./context/GameLogic";
// import { MatchStyleProvider } from "./context/MatchStyle";

function App() {
  return (
    <>
      {/* <MatchStyleProvider> */}
      <HeaderBar />
      <HowToPlay />
      <OptionsList />
      <GameLogic boardSize={12}>
        <Gridof12 />
      </GameLogic>
      {/* <GameBoard /> */}
      {/* </MatchStyleProvider> */}
    </>
  );
}

export default App;
