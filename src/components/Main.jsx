import { Trivia } from "./Trivia";

export const Main = () => {
  return (
    <div className="main">
      <div className="top">
        <div className="timer">30</div>
      </div>

      <div className="bottom">
        <Trivia />
      </div>
    </div>
  );
};
