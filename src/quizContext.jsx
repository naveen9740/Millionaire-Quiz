import { createContext, useContext, useState } from "react";
import { moneyPyramid, data } from "./data";

const Context = createContext();
export const QuizContext = ({ children }) => {
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [username, setUsername] = useState();
  return (
    <Context.Provider
      value={{
        stop,
        setStop,
        questionNumber,
        setQuestionNumber,
        moneyPyramid,
        data,
        earned,
        setEarned,
        username,
        setUsername,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export let useQuizContext = () => useContext(Context);
