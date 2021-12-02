import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuizContext } from "./quizContext";

ReactDOM.render(
  <React.StrictMode>
    <QuizContext>
      <App />
    </QuizContext>
  </React.StrictMode>,
  document.getElementById("root")
);
