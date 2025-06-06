import React from "react";
import { useState, useEffect } from "react";
import { getSets } from "../tools/getSets";
import { shuffleCards } from "../tools/shuffleCards";
import alphabet from "../data/alphabet.json";

export const GameLogicContext = React.createContext();

const matchTypes = ["upperCase", "lowerCase", "word", "emoji"];

export function GameLogic({ boardSize, children }) {
  //board setup - only run once at the start of the game
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
    if (!firstPick) {
      setFirstPick(tile.tile); // Store the first picked tile
      setTileState((prevState) =>
        prevState.map((t) =>
          t.tile === tile.tile ? { ...t, flipped: true } : t
        )
      );
    } else {
      // Second pick logic
      const secondPick = tile;
      setTileState((prevState) =>
        prevState.map((t) => {
          if (t.tile === firstPick.tile || t.tile === secondPick.tile) {
            return { ...t, flipped: true };
          }
          return t;
        })
      );

      // Check for a match
      if (firstPick.tile.value === secondPick.tile.value) {
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

  // need to do the matching logic
  // pick first card, store value in state - grid of 12 or context?
  // pick second card, check if the card value is in the same bracket as the first card
  // if it is, mark both as matched
  // update state for both cards as matched - what level state do I store this on? Card level?
  // pass it down to card at the time of sending the flip bac

  return (
    <GameLogicContext.Provider value={{ tileState, handleTileClick }}>
      {children}
    </GameLogicContext.Provider>
  );
}
