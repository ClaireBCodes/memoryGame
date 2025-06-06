import { expect, test } from "vitest";
import { getSets } from "../tools/getSets";
import alphabet from "../data/alphabet.json";

test("getSets returns correct number of sets", () => {
  const count = 5;
  const sets = getSets(alphabet, count);
  expect(sets.length).toBe(count);
});

test("getSets returns unique sets", () => {
  const count = 10;
  const sets = getSets(alphabet, count);
  const uniqueSets = new Set(sets.map((set) => JSON.stringify(set)));
  expect(uniqueSets.size).toBe(count);
});
