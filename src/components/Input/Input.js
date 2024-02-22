import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Input({ guesses, setGuesses, disabled }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();

        if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
          return;
        }

        setGuesses((guesses) => [...guesses, guess]);

        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(e) => {
          const value = e.currentTarget.value;
          setGuess(value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Input;
