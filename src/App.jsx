import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Wordle from "./components/Wordle";

function App() {
  const [ans, setAns] = useState("");

  useEffect(() => {
    async function getData() {
      const options = {
        method: "GET",
        url: "https://wordle-answers-solutions.p.rapidapi.com/today",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key": "xxs",
          "X-RapidAPI-Host": "wordle-answers-solutions.p.rapidapi.com",
        },
      };
      const { data } = await axios.request(options);
      setAns(data.today.toLowerCase());
    }
    getData();
  }, []);
  return (
    <>
      <div>WORDLE</div>
      <div className="card">{ans && <Wordle solution={ans} />}</div>
    </>
  );
}

export default App;
