import { findWords } from "./boggle";

// Test board
export const BOARD = [
  ["O", "M", "D", "Q"],
  ["Z", "Q", "R", "T"],
  ["Q", "C", "A", "Q"],
  ["P", "Q", "Q", "Q"],
];

export const runTests = () => {
  const result = findWords(BOARD);
  const alphabeticalResult = result.sort();
  const expected = ["A", "ART", "CAR", "CARD", "CART"];
  if (alphabeticalResult.length !== expected.length) {
    return false;
  }
  for (const index in alphabeticalResult) {
    if (alphabeticalResult[index] !== expected[index]) {
      return false;
    }
  }
  return true;
};
