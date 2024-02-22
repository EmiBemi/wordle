import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          className={`cell${result ? ` ${result[num].status}` : ""}`}
          key={num}
        >
          {result ? result[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
