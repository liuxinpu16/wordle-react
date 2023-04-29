import { useState } from "react";

function useWordle(solution) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // array
  const [history, setHistory] = useState([]); //string
  const [won, setWon] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  const formatGuess = () => {
    let solutionArray = solution.split("");
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setWon(true);
    }
    setGuesses((pre) => {
      const newGuesses = [...pre];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setTurn((pre) => pre + 1);
    setCurrentGuess("");
    setHistory((pre) => [...pre, currentGuess]);
    setUsedKeys((pre) => {
      let newKeys = { ...pre };
      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];
        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }
        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }
        if (
          l.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKeys[l.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
  };

  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        return;
      }
      if (history.includes(currentGuess)) {
        return;
      }
      if (currentGuess.length !== 5) {
        return;
      }
      const formated = formatGuess();
      addNewGuess(formated);
    }
    if (key === "Backspace") {
      setCurrentGuess((pre) => pre.slice(0, -1));
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((pre) => pre + key);
      }
    }
  };

  return { turn, currentGuess, handleKeyup, won, guesses, usedKeys };
}

export default useWordle;
