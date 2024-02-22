import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Input from "../Input";
import WorldList from "../WordList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const hasWon = guesses.some((guess) => guess === answer);
  const hasLost = guesses.length >= NUM_OF_GUESSES_ALLOWED && !hasWon;
  return (
    <>
      <WorldList guesses={guesses} answer={answer} />
      {hasWon && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {hasLost && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <Input
        guesses={guesses}
        setGuesses={setGuesses}
        disabled={hasWon || hasLost}
      />
    </>
  );
}

export default Game;
