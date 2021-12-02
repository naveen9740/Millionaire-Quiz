import { useEffect, useState } from "react";
import { useQuizContext } from "../quizContext";
import play from "../sounds/play.wav";
import correct from "../sounds/correct.wav";
import wrong from "../sounds/wrong.wav";

import useSound from "use-sound";

export const Trivia = () => {
  let { data, setStop, questionNumber, setQuestionNumber } = useQuizContext();

  const [question, setQuestion] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [ClassName, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  console.log(letsPlay);
  const [correctAns] = useSound(correct);
  const [wrongAns] = useSound(wrong);

  useEffect(() => {
    console.log("sss");
    letsPlay();
    console.log("ee");
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

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

                delay(3000, () => {
                  setClassName(ans.correct ? "answer correct" : "answer wrong");
                });
                delay(5000, () => {
                  if (ans.correct) {
                    correctAns();

                    delay(1000, () => {
                      setQuestionNumber((prev) => prev + 1);
                      setSelectedAns(null);
                    });
                  } else {
                    wrongAns();
                    delay(1000, () => {
                      setStop(true);
                    });
                    setStop(true);
                  }
                });
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
