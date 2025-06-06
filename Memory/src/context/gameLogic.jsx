import React from "react";
import { useState } from "react";
import { getSets } from "../tools/getSets";
import { shuffleCards } from "../tools/shuffleCards";
import alphabet from "../data/alphabet.json";

export const GameLogicContext = React.createContext();

const matchTypes = ["upperCase", "lowerCase", "word", "emoji"];

export function GameLogic({ boardSize, children }) {
  //board setup - only run once at the start of the game

  // TODO (Josh): Everything between here and startingBoard can be pulled out into a function.
  const sets = getSets(alphabet, boardSize / 2); // small array of objects back
  const cards1 = sets.map((set) => ({
    tile: set,
    display: matchTypes[0],
    flipped: false, // Initially all tiles are not flipped
    matched: false, // Initially no tiles are matched
  }));
  const cards2 = sets.map((set) => ({
    tile: set,
    display: matchTypes[1],
    flipped: false,
    matched: false,
  }));
  const startingBoard = shuffleCards(cards1, cards2); // List of tiles in random order.

  const [tileState, setTileState] = useState(startingBoard);
  const [firstPick, setFirstPick] = useState("");

  const handleTileClick = (tile) => {
    if (tile.matched || tile.flipped) {
      return; // Ignore clicks on matched or already flipped tiles
    }

    // TODO (Josh): Doing `map` for this logic is not efficient, and suggests you should be using a different data structure.
    // Try making the board an Object or a Map, keyed by the ID of the tile.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    if (!firstPick) {
      console.log("First pick:", tile.tile);
      setFirstPick(tile); // Store the first picked whole tile
      setTileState((prevState) =>
        prevState.map((t) => (t === tile ? { ...t, flipped: true } : t))
      );
    } else {
      // Second pick logic
      const secondPick = tile;
      console.log("Second pick:", secondPick.tile);
      setTileState((prevState) =>
        prevState.map((t) => {
          if (t === firstPick || t === secondPick) {
            return { ...t, flipped: true };
          }
          return t;
        })
      );

      // Check for a match
      if (firstPick.tile.id === secondPick.tile.id) {
        // Mark both as matched
        setTileState((prevState) =>
          prevState.map((t) =>
            t.tile === firstPick.tile || t.tile === secondPick.tile
              ? { ...t, matched: true }
              : t
          )
        );
        setFirstPick(""); // Reset first pick
      } else {
        // Reset the first pick after a short delay
        setTimeout(() => {
          setTileState((prevState) =>
            prevState.map((t) =>
              t.tile === firstPick.tile || t.tile === secondPick.tile
                ? { ...t, flipped: false }
                : t
            )
          );
          setFirstPick(""); // Reset first pick
        }, 1000);
      }
    }
  };

  return (
    <GameLogicContext.Provider value={{ tileState, handleTileClick }}>
      {children}
    </GameLogicContext.Provider>
  );
}
