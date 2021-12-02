import { useEffect, useState } from "react";
import { useQuizContext } from "../quizContext";
import { Trivia } from "./Trivia";

export const Main = () => {
  let { stop, earned, setStop, questionNumber } = useQuizContext();

  let [time, setTime] = useState(30);

  useEffect(() => {
    if (time === 0) return setStop(true);
    const interval = setTimeout(() => {
      time >= 1 && setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time, stop]);

  useEffect(() => {
    setTime(30);
  }, [questionNumber]);

  return (
    <div className="main">
      {stop ? (
        <h1 className="endText">You Earned ₹ {earned}</h1>
      ) : (
        <>
          <div className="top">
            <div className="timer">{time}</div>
          </div>

          <div className="bottom">
            <Trivia />
          </div>
        </>
      )}
    </div>
  );
};
