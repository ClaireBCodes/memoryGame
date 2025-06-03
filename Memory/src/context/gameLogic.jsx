import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BootstrapTile } from "./BootstrapTile";
import alphabet from "../data/alphabet.json";


  // need to do the matching logic
  // pick first card, store value in state - grid of 12 or context?
  // pick second card, check if the card value is in the same bracket as the first card
  // if it is, mark both as matched
  // update state for both cards as matched - what level state do I store this on? Card level?
  // pass it down to card at the time of sending the flip bac

const matchTable = alphabet;
const sets = getSets(matchTable, 6);
const pairs = pickPairs(sets, 0, 2);
const tilePositions = shuffleCards(pairs); // list of tiles in random order. No longer pairs

//Grab 6 random differernt pairs of tiles from the matchTable
function getSets(table, count) {
  const setsPicked = [];
  for (let i = 0; i < count; i++) {
    let getIndex = Math.floor(Math.random() * table.length);
    setsPicked.push(table[getIndex]);
    table.splice(getIndex, 1);
  }
  console.log("sets generated:", setsPicked);
  return setsPicked;
}

function pickPairs(sets, index1, index2) {
  let pairs = [];
  for (let i = 0; i < sets.length; i++) {
    pairs.push([sets[i][index1], sets[i][index2]]);
  }
  console.log("Pairs generated:", pairs);
  return pairs;
}

// Shuffle the pairs of tiles using the Fisher-Yates algorithm
function shuffleCards(pairs) {
  let flatList = pairs.flat();
  for (let i = flatList.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flatList[i], flatList[j]] = [flatList[j], flatList[i]];
  }
  console.log("Shuffled tiles:", flatList);
  return flatList;
}
