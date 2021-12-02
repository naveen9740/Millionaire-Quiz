import { useRef } from "react";
import { useQuizContext } from "../quizContext";

export const Start = () => {
  let { username, setUsername } = useQuizContext();
  const inputRef = useRef();
  return (
    <div className="start">
      <input
        ref={inputRef}
        type="text"
        className="startInput"
        placeholder="Enter your Name"
      />
      <button
        className="startBtn"
        onClick={() => {
          setUsername(inputRef.current.value && inputRef.current.value);
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};
