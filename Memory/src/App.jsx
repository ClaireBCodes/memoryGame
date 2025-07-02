import "./App.css";
import { HeaderBar } from "./components/HeaderBar";
import { HowToPlay } from "./components/HowToPlay";
import { Gridof12 } from "./components/Gridof12";
import { Container } from "react-bootstrap";
import { GameLogic } from "./context/GameLogic";
// import { MatchStyleProvider } from "./context/MatchStyle";

function App() {
  return (
    <>
      <HeaderBar />
      <HowToPlay />
      <Container className="options-board">
        <GameLogic>
          <Gridof12 />
        </GameLogic>
      </Container>
      {/* <GameBoard /> */}
    </>
  );
}

export default App;
