import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup, turn, won, guesses, usedKeys } =
    useWordle(solution);

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    if (won) {
      window.removeEventListener("keyup", handleKeyup);
      setTimeout(() => setShowModal(true), 2000);
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup, turn, won]);

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal ? <Modal won={won} turn={turn} solution={solution} /> : null}
    </div>
  );
};

export default Wordle;
