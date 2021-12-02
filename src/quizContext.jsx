import { createContext, useContext, useState } from "react";
import { moneyPyramid, data } from "./data";

const Context = createContext();
export const QuizContext = ({ children }) => {
  const [timeout, setTimeout] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <Context.Provider
      value={{
        timeout,
        setTimeout,
        questionNumber,
        setQuestionNumber,
        moneyPyramid,
        data,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export let useQuizContext = () => useContext(Context);
