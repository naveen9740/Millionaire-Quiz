import "./App.css";
import { Main } from "./components/Main.jsx";
import { Pyramid } from "./components/Pyramid.jsx";
import { Start } from "./components/Start";
import { useQuizContext } from "./quizContext";

const App = () => {
  let { username } = useQuizContext();
  return (
    <div className="app">
      {!username ? (
        <Start />
      ) : (
        <>
          <Main />
          <Pyramid />
        </>
      )}
    </div>
  );
};

export default App;
