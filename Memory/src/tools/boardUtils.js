import alphabet from "../data/alphabet.json";
import { keyBy } from "lodash";

export const matchStyles = ["upperCase", "lowerCase", "word", "emoji"];

export const defaultBoard = {
  boardSize: 12,
  matchStyle1: "upperCase",
  matchStyle2: "lowerCase",
};

export function cardKey(card) {
  return `${card.id}-${card.display}${card.set}`;
}

//Grab "count" random differernt pairs of tiles from the "table"
export function getSets(table, count) {
  const setsPicked = [];
  const workingTable = [...table]; // Create a copy of the table to avoid modifying the original
  for (let i = 0; i < count; i++) {
    let getIndex = Math.floor(Math.random() * workingTable.length);
    setsPicked.push(workingTable[getIndex]);
    workingTable.splice(getIndex, 1);
  }
  // console.log("sets generated:", setsPicked);
  return setsPicked;
}
//returns an array of objects the size of count
// Each object is a random pair of tiles from the table

export function buildStartingBoard({ boardSize, matchStyle1, matchStyle2 }) {
  // console.log(boardSize, matchStyle1, matchStyle2);

  const sets = getSets(alphabet, boardSize / 2); // small array of objects back

  const cards1 = sets.map((set) => ({
    ...set,
    display: matchStyle1,
    flipped: false, // Initially all tiles are not flipped
    matched: false, // Initially no tiles are matched
    set: 1,
  }));

  const cards2 = sets.map((set) => ({
    ...set,
    display: matchStyle2,
    flipped: false,
    matched: false,
    set: 2,
  }));

  const allTiles = [...cards1, ...cards2];

  const keyedTiles = keyBy(allTiles, cardKey);

  // {{}} - Object of Objects.
  return keyedTiles;
}

export function niceText(matchStyle) {
  switch (matchStyle) {
    case "lowerCase":
      return "a : lower case";
    case "upperCase":
      return "A : upper case";
    case "emoji":
      return "🍎 : image";
    case "word":
      return "apple : word";
  }
};