import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function WordList({ guesses = [], answer }) {
  const emptyRows =
    guesses.length === 0
      ? range(NUM_OF_GUESSES_ALLOWED)
      : range(guesses.length, NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} answer={answer} />
      ))}
      {emptyRows.map((_, index) => (
        <Guess key={index} />
      ))}
    </div>
  );
}

export default WordList;
