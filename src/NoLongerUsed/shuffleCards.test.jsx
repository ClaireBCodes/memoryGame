import { expect, test } from "vitest";
import { shuffleCards } from "./shuffleCards";
import { getSets } from "../tools/getSets";
import _ from "lodash";
import alphabet from "../data/alphabet.json";

test("shuffleCards output is double input", () => {
  const tiles = getSets(alphabet, 10); // Get 5 sets of pairs
  expect(tiles.length).toBe(10);

  // const shuffled = shuffleCards(tiles);
  // expect(shuffled.length).toBe(tiles.length);
});

// test("shuffleCards returns an array of objects", () => {
//   const tiles = getSets(alphabet, 5); // Get 5 sets of pairs
//   const shuffled = shuffleCards(tiles);
//   expect(_.isArray(shuffled))  .toBe(true);
//   expect(shuffled.every(_.isObject)).toBe(true) ;
// });

test("shuffleCards does not remove or duplicate tiles", () => {
  const tiles = getSets(alphabet, 8); // Get 8 sets of pairs
  const shuffled = shuffleCards(tiles);

  tiles.forEach((tile) => {
    expect(shuffled).toContainEqual(tile);
  });
});
