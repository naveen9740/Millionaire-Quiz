import { useEffect, useState } from "react";
import { useQuizContext } from "../quizContext";
export const Pyramid = () => {
  let { moneyPyramid, questionNumber, earned, setEarned } = useQuizContext();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="pyramid">
      <ul className="moneylist">
        {moneyPyramid
          .map(({ id, amount }) => {
            return (
              <li
                className={
                  questionNumber === id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <div className="moneyListItemNum">{id}</div>
                <div className="moneyListItemAmount">₹ {amount}</div>
              </li>
            );
          })
          .reverse()}
      </ul>
    </div>
  );
};
