import "./App.css";
import { HeaderBar } from "./components/HeaderBar";
import { HowToPlay } from "./components/HowToPlay";
// import { OptionsList } from "./components/OptionsList";
import { GameBoard } from "./components/GameBoard";
import { Gridof12 } from "./components/Gridof12";
import { GameLogic } from "./context/GameLogic";
import { Container } from "react-bootstrap";
import { GameOptionsProvider } from "./context/GameOptions";
// import { MatchStyleProvider } from "./context/MatchStyle";

function App() {
  return (
    <>
      <HeaderBar />
      <HowToPlay />
      <Container className="options-board">
        <GameOptionsProvider>
          {/* <OptionsList /> */}

          <GameLogic boardSize={12}>
            <Gridof12 />
          </GameLogic>
        </GameOptionsProvider>
      </Container>
      {/* <GameBoard /> */}
    </>
  );
}

export default App;
