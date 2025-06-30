import { expect, test } from "vitest";
import { buildStartingBoard } from "./gameLogic";
import { size } from "lodash";

test("buildStartingBoard should build a starting board", () => {
  const count = 12;
  const board = buildStartingBoard(count, "upperCase", "upperCase");

  expect(size(board)).toBe(12);
});
