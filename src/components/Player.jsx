import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  const playerName = useRef();

  // function updatePlayerName(evnt) {
  //   setSubmitted(false);
  //   setPlayerName(() => (evnt.target.value));
  //   return;
  // }

  function handleSubmit() {
    setPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName??  'unknown entity'}</h2>
      <p>
        <input type="text" required ref={playerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
