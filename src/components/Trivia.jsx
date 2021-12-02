import { useEffect, useState } from "react";
import { useQuizContext } from "../quizContext";

export const Trivia = () => {
  let {
    data,
    setTimeout: { setStop },
    questionNumber,
    setQuestionNumber,
  } = useQuizContext();

  const [question, setQuestion] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [ClassName, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans) => {
          return (
            <div
              className={selectedAns === ans ? ClassName : "answer"}
              onClick={() => {
                setSelectedAns(ans);
                setClassName("answer active");
                setTimeout(() => {
                  console.log("eee");
                  setClassName(ans.correct ? "answer correct" : "answer wrong");
                }, 2000);
              }}
            >
              {ans.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};
