import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { GameLogicContext } from "../context/GameLogic"; // Import the click handler function

export function BootstrapTile({ tile }) {
  const { handleTileClick } = useContext(GameLogicContext); // Get the click handler from context

  //const shownSymbol = tile.flipped || tile.matched ? tile.tile[tile.display] : "?"; // Show the symbol if flipped or matched, otherwise show a placeholder
  // tile.display gives the type of symbol to display
  // tile.matched is true if the tile has been matched
  // tile.flipped is true if the tile has been flipped
  // tile.tile[tile.display] is what displays on the tile
  const shownSymbol = tile.tile[tile.display];

  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
      <Card
        bg="light"
        className="border-success text-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "6px solid", // custom green border
          backgroundColor: "#f8f9fa", // Bootstrap light bg
          color: "#198754", // Bootstrap success green
        }}
        onClick={() => handleTileClick(tile)}
      >
        <Card.Body className="d-flex justify-content-center align-items-center p-0">
          <Card.Title className="w-100 m-0">{shownSymbol}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
