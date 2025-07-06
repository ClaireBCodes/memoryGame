import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { GameLogicContext } from "../context/GameLogic"; // Import the click handler function
import { ScalableText } from "./ScalableText";

export function BootstrapTile({ tile }) {
  const { handleTileClick } = useContext(GameLogicContext); // Get the click handler from context

  // tile.display gives the type of symbol to display
  // tile.matched is true if the tile has been matched
  // tile.flipped is true if the tile has been flipped
  // tile.tile[tile.display] is what displays on the tile
  // flip-card-front shows pattern,
  // flip-card-back shows match symbol.

  const shownSymbol = tile[tile.display];

  let flipped = tile.flipped ? "flipped" : "not-flipped";
  let matched = tile.matched ? "matched" : "not-matched";

  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
      <Card
        className="text-center flip-card bg-transparent"
        onClick={() => handleTileClick(tile)}
      >
        <Card.Body
          className={`d-flex justify-content-center align-items-center p-0 flip-card-inner ${flipped}`}
        >
          <Card.Title className="w-100 m-0 flip-card-front">
            {/* pattern side */}
          </Card.Title>
          <Card.Title className={`w-100 m-0 p-1 flip-card-back ${matched}`}>
            {/* symbol side */}
            <ScalableText text={shownSymbol} />
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
