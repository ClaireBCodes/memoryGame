import "./App.css";
import { HeaderBar } from "./components/HeaderBar";
import { HowToPlay } from "./components/HowToPlay";
import { Gridof12 } from "./components/Gridof12";
import { Container } from "react-bootstrap";
import { GameLogic } from "./context/GameLogic";
// import { MatchStyleProvider } from "./context/MatchStyle";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <HeaderBar />
      <HowToPlay />
      <Container className="options-board">
        <GameLogic>
          <Gridof12 />
        </GameLogic>
      </Container>
      {/* <GameBoard /> */}
    </div>
  );
}

export default App;
