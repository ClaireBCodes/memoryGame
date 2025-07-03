import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { GameLogicContext } from "../context/GameLogic"; // Import the click handler function

export function BootstrapTile({ tile }) {
  const { handleTileClick } = useContext(GameLogicContext); // Get the click handler from context

  // tile.display gives the type of symbol to display
  // tile.matched is true if the tile has been matched
  // tile.flipped is true if the tile has been flipped
  // tile.tile[tile.display] is what displays on the tile
  // flip-card-front shows pattern,
  // flip-card-back shows match symbol.

  const shownSymbol = tile[tile.display];

  // text opacity for flip and matched
  let textOpacity = 1; // default full visibility
  if (!tile.flipped) {
    textOpacity = 0; // hide symbol
  } else if (tile.matched) {
    textOpacity = 0.4; // paler symbol
  }

  //text size scaling for single vs multi character options - WIP
  // Determine the font for SVG
  // let svgFontFamily;
  // if (tile.display === "emoji") {
  //   svgFontFamily = "'Noto Color Emoji', sans-serif";
  // } else {
  //   svgFontFamily = "Arial, sans-serif";
  // }
  const isWord = shownSymbol.length > 1;
  const symbolType = isWord ? "fullWord" : "singleChar";
  // code for svg image generation here
  //not sure that it is taking in noto font, but it is at least arial again
  // const svgString = `
  // <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
  //   <style>
  //     text { font-family: ${svgFontFamily}; }
  //   </style>
  //   <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
  //         font-size='48' fill='black'>${shownSymbol}</text>
  // </svg>`.trim();

  // const encodedSvg = encodeURIComponent(svgString);
  // const svgImgSrc = `data:image/svg+xml,${encodedSvg}`;

  let flipped = tile.flipped ? "flipped" : "not-flipped";

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
          <Card.Title className="w-100 m-0 flip-card-back">
            {shownSymbol}
            {/* <img
              src={svgImgSrc}
              alt={shownSymbol}
              fluid
              className={`tile-symbol ${symbolType}`}
            /> */}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
