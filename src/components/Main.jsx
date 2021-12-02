import { useEffect } from "react";
import { useQuizContext } from "../quizContext";
import { Trivia } from "./Trivia";

export const Main = () => {
  let { stop, earned } = useQuizContext();

  return (
    <div className="main">
      {stop ? (
        <h1 className="endText">You Earned ₹ {earned}</h1>
      ) : (
        <>
          <div className="top">
            <div className="timer">30</div>
          </div>

          <div className="bottom">
            <Trivia />
          </div>
        </>
      )}
    </div>
  );
};
