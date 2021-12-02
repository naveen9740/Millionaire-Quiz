import { useState } from "react";
import { useQuizContext } from "../quizContext";
export const Pyramid = () => {
  let { qNum, moneyPyramid } = useQuizContext();
  return (
    <div className="pyramid">
      <ul className="moneylist">
        {moneyPyramid
          .map(({ id, amount }) => {
            return (
              <li
                className={
                  qNum === id ? "moneyListItem active" : "moneyListItem"
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
