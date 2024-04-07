import { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "React is ... ?",
    options: ["a library", "a framework", "an application"],
    correct: 0,
  },
  {
    title: "Component is ... ",
    options: ["an application", "a part of an application or a page", "that I don't know what is"],
    correct: 1,
  },
  {
    title: "what is JSX?",
    options: ["It's a simple HTML", "It's a function", "This is the same HTML, but with the ability to execute JS code"],
    correct: 2,
  },
];

function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed 3 answers out of 10</h2>
      <button>Try again</button>
    </div>
  );
}

function Game({ question, onClickOption }) {
  return (
    <>
      <div className="progress">
        <div style={{ width: "50%" }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={option} onClick={() => onClickOption(index)}>
            {option}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickOption = (index) => {
    console.log(step, index);
  };

  return (
    <div className="App">
      <Game question={question} onClickOption={onClickOption} />
      {/* <Result /> */}
    </div>
  );
}

export default App;
