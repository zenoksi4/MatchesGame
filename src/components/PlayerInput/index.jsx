import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.css";

function PlayerInput({
  setPlayerTook,
  maxTake,
  gameNumMatch,
  setGameNumMatch,
  setCurrentPlayer,
  playerTook,
}) {
  const [userInput, setUserInput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (gameNumMatch < userInput) {
      return;
    }
    setPlayerTook(playerTook + userInput);
    setGameNumMatch(gameNumMatch - userInput);
    setCurrentPlayer(true);
  };

  const userInputHandler = (e) => {
    setUserInput(+e.target.value);
  };

  return (
    <form className={styles.inputWrapper} onSubmit={submitHandler}>
      <label>Choose matches</label>
      <Input
        onChange={userInputHandler}
        max={maxTake}
        className={styles.input}
      />
      <Button type="submit">Choose</Button>
    </form>
  );
}

export default PlayerInput;
