import "./App.css";
import { HeaderBar } from "./components/HeaderBar";
import { HowToPlay } from "./components/HowToPlay";
import { Gridof12 } from "./components/Gridof12";
import { Container } from "react-bootstrap";
import { GameLogic } from "./context/GameLogic";
import { getViewportHeight } from "./tools/boardUtils"

function App() {

  const viewportheight = getViewportHeight();

  return (
    <div
      className="d-flex flex-column  min-vw-100"

    >
      <HeaderBar />
      <HowToPlay />
      <Container className="options-board container justify-content-center">
        <GameLogic>
          <Gridof12 className="grid-wrapper" />
        </GameLogic>
      </Container>
    </div>
  );
}

export default App;
