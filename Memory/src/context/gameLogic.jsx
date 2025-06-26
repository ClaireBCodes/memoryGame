import React from "react";
import { useState } from "react";
import { getSets } from "../tools/getSets";
// import { shuffleCards } from "../tools/shuffleCards";
import alphabet from "../data/alphabet.json";
import { useGameOptions } from "../context/GameOptions";
import { keyBy, shuffle } from "lodash";

export const GameLogicContext = React.createContext();

// const matchTypes = ["upperCase", "lowerCase", "word", "emoji"];

function cardKey(card) {
  return `${card.tile.id}-${card.display}${card.set}`;
}

function buildStartingBoard(boardSize, matchStyle1, matchStyle2) {
  // console.log(boardSize, matchStyle1, matchStyle2);

  const sets = getSets(alphabet, boardSize / 2); // small array of objects back
  const cards1 = sets.map((set) => ({
    tile: set,
    display: matchStyle1,
    flipped: false, // Initially all tiles are not flipped
    matched: false, // Initially no tiles are matched
    set: 1,
  }));

  const cards2 = sets.map((set) => ({
    tile: set,
    display: matchStyle2,
    flipped: false,
    matched: false,
    set: 2,
  }));

  // console.log("cards1",cards1)

  const allTiles = [...cards1, ...cards2];
  console.log("all tiles", allTiles)
  const keyedTiles = keyBy(allTiles, cardKey);
  console.log("keyed tiles", keyedTiles)
  const startingBoard = shuffle(keyedTiles); // shuffle is removing the keys?
  console.log("starting board",startingBoard);
  return startingBoard;


  // I JUST WANT AN ARRAY OF OBJECTS!!!!
  // IT NEEDS TO STAY IN THE SAME SHUFFLED BLOODY ORDER!!!
  // NO MORE REMOVING KEYS, NO MORE UNDOING SHUFFLES!!!
  // NO MORE ADDING EXTRA BITS TO THE END!!!!
  // SOMETHING I CAN MAP THE BOOTSTRAP CARD TEMPLATE OVER!!!
}

export function GameLogic({ children }) {
  const { boardSize, matchStyle1, matchStyle2 } = useGameOptions(); //gets settings from context

  //board setup - only run once at the start of the game

  const startingBoard = buildStartingBoard(boardSize, matchStyle1, matchStyle2);
  console.log("startingBoard", startingBoard);

  const [tileState, setTileState] = useState(startingBoard);
  const [firstPick, setFirstPick] = useState(null);

  const handleTileClick = (tile) => {
    if (tile.matched || tile.flipped) {
      return; // Ignore clicks on matched or already flipped tiles
    }

    if (!firstPick) {
      console.log("First pick:", tile.tile);
      setFirstPick(tile); // Store the first picked whole tile

      const key = cardKey(tile);

      setTileState((prevState) => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          flipped: true,
        },
      }));

      // setTileState((prevState) => {
      //   return {
      //     ...prevState,
      //     [cardKey(tile)]: { ...tile, flipped: true },
      //     // currently not working
      //     // this needs to update the value of the flipped tile, not add it on the end
      //   };
      // });

      
    } else {
      // Second pick logic
      const secondPick = tile;
      console.log("Second pick:", secondPick.tile);

      const isMatched = firstPick.tile.id === secondPick.tile.id;

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
      if (isMatched) {
        setFirstPick(null); // Reset first pick
      } else {
        // Reset the first pick after a short delay
        setTimeout(() => {
          setTileState((prevState) => {
            return {
              ...prevState,
              [cardKey(firstPick)]: { ...firstPick, flipped: false },
              [cardKey(secondPick)]: { ...secondPick, flipped: false },
            };
          });

          setFirstPick(null); // Reset first pick
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
