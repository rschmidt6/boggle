/*
Boggle Solver

You have a two-dimensional grid of letters.
You must implement findWords which returns an alphabetized list of valid words

You get constant size and utility function isWord to help

Rules:
1. Start from any position
2. You can move up, down, left, and right (no diagonals)
3. Repeat #2 to add letters to your word
4. You cannot use the same coordinates twice in the same word
*/

// Bank of valid words in sample board
const ALL_WORDS = ["A", "ART", "CAR", "CARD", "CART", "PURPLE", "PRETTY"];

export const isWord = (word: string): boolean => ALL_WORDS.includes(word);

export function findWords(board: string[][]) {
  // Implement your solution here
  return [];
}
