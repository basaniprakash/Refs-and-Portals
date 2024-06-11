import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // const [timeRe]
  const timer = useRef();
  const dialog = useRef();

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleTimerStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevRemainingTime => prevRemainingTime - 10);
    }, 10);
  }

  function handleTimerStop() {
    dialog.current.open();
    clearTimeout(timer.current);
    return;
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal result={"lost"} targetTime={targetTime} remainingTime={timeRemaining} ref={dialog} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleTimerStop : handleTimerStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>{timerIsActive ? "Time is running" : "Timer inactive"}</p>
      </section>
    </>
  );
}
