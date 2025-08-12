import React, { useEffect } from "react";
import { useState } from "react";
import { cardKey } from "../tools/boardUtils";
import { shuffle, keys } from "lodash";
import {
  buildStartingBoard,
  defaultBoard,
  isGameFinished,
} from "../tools/boardUtils";
import { OptionsList } from "../components/OptionsList";
import { GameFinished } from "../components/GameFinished";
import GameLogicContext from "./GameLogicContext";

export function shuffledKeys(board) {
  return shuffle(keys(board));
}

export function GameLogic({ children }) {
  const [firstPick, setFirstPick] = useState(null);
  const [initialBoard, setInitialBoard] = useState(
    buildStartingBoard(defaultBoard)
  );
  const [tileState, setTileState] = useState(initialBoard); //holds the active board in its most recent state
  const [shuffled, setShuffled] = useState(shuffledKeys(tileState));

  const newBoard = (opts) => {
    setInitialBoard(buildStartingBoard(opts));
    setFirstPick(null);
  };

  useEffect(() => {
    setTileState(initialBoard);
    setShuffled(shuffledKeys(initialBoard));
  }, [initialBoard]);

  const handleTileClick = (tile) => {
    if (tile.matched || tile.flipped) {
      return; // Ignore clicks on matched or already flipped tiles
    }

    if (!firstPick) {
      console.log("First pick:", tile);
      setFirstPick(tile); // Store the first picked whole tile

      const key = cardKey(tile);

      setTileState((prevState) => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          flipped: true,
        },
      }));
    } else {
      // Second pick logic
      const secondPick = tile;
      console.log("Second pick:", secondPick);

      const isMatched = firstPick.id === secondPick.id;

      setTileState((prevState) => {
        // currently this turns the array of objects into a different structure:
        // becomes {{tile1}, {tile2 etc}, cardkey of firstpick {object of first card picked}}
        // so when the game board updates it is no longer a map on an array
        return {
          ...prevState,
          [cardKey(firstPick)]: {
            ...firstPick,
            flipped: true,
            matched: isMatched,
          },
          [cardKey(secondPick)]: {
            ...secondPick,
            flipped: true,
            matched: isMatched,
          },
        };
      });

      // Check for a match
      if (!isMatched) {
        // Reset the first pick after a short delay
        const localFirstPick = firstPick;
        setTimeout(() => {
          // this delay should be on the animation not the state change.
          setTileState((prevState) => {
            return {
              ...prevState,
              [cardKey(firstPick)]: { ...localFirstPick, flipped: false },
              [cardKey(secondPick)]: { ...secondPick, flipped: false },
            };
          });
        }, 1000); // display time for not-matched tiles before they flip back
      }

      setFirstPick(null); // Reset first pick
    }
  };

  return (
    <GameLogicContext.Provider value={{ tileState, shuffled, handleTileClick }}>
      <OptionsList newBoard={newBoard} />
      <>
        {isGameFinished(tileState) && <GameFinished />}
        {children}
      </>
    </GameLogicContext.Provider>
  );
}
