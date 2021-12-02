import { useState } from "react";
import { moneyPyramid } from "../data";
export const Pyramid = () => {
  const [qNum, setQNum] = useState(1);
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
