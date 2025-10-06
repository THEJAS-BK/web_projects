import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({ setup: "", punchline: "" });
  let [showPunch, setShowPunch] = useState(false);
  const URL = "https://official-joke-api.appspot.com/jokes/random";
  async function getNewJoke() {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke(jsonResponse);
  }
  useEffect(() => {
    async function getNewJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke(jsonResponse);
    }
    getNewJoke();
  }, []);
  useEffect(() => {
    setShowPunch(false);
    const timer = setTimeout(() => {
      setShowPunch(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [joke]);
  return (
    <div>
      <h1>Joker</h1>
      <p style={{ fontSize: "2rem" }}>{joke.setup}</p>

      {showPunch && <p style={{ fontSize: "2rem" }}>{joke.punchline}</p>}

      <button onClick={getNewJoke}>New joke</button>
    </div>
  );
}
