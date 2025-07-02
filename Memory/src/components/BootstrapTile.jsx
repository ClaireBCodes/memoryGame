import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { GameLogicContext } from "../context/GameLogic"; // Import the click handler function

export function BootstrapTile({ tile }) {
  const { handleTileClick } = useContext(GameLogicContext); // Get the click handler from context

  // tile.display gives the type of symbol to display
  // tile.matched is true if the tile has been matched
  // tile.flipped is true if the tile has been flipped
  // tile.tile[tile.display] is what displays on the tile
  const shownSymbol = tile[tile.display];
  // console.log(shownSymbol)

  // Determine background color
  let backgroundColor = "#f8f9fa"; // default flipped color
  let borderColor = "#198754"; // default green border
  let textOpacity = 1; // default full visibility

  if (!tile.flipped) {
    backgroundColor = "#fff3cd"; // light yellow for unflipped
    borderColor = "#ffc107"; // yellow border
    textOpacity = 0; // hide symbol
  } else if (tile.matched) {
    backgroundColor = "#fff3cd"; // light yellow for matched
    borderColor = "#ffd700";
    textOpacity = 0.4; // paler symbol
  }

  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
      <Card
        bg="light"
        className="text-center flip-card"
        onClick={() => handleTileClick(tile)}
      >
        <Card.Body className="d-flex justify-content-center align-items-center p-0">
          <Card.Title
            className="w-100 m-0"
            style={{ opacity: textOpacity, transition: "opacity 0.3s", fontSize: "3.5rem" }}
          >
            {shownSymbol}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
