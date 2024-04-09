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

// prettier-ignore
function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correct} answers out of {questions.length}</h2>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>
  );
}

// prettier-ignore
function Game({ step, question, onClickOption }) {
  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={option} onClick={()=>{onClickOption(index)}}>
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

  const [correct, setCorrect] = useState(0);

  const onClickOption = (index) => {
    setStep(step + 1);
    if (index === question.correct) setCorrect(correct + 1);
  };

  return (
    <div className="App">
      {step !== questions.length ? <Game step={step} question={question} onClickOption={onClickOption} /> : <Result correct={correct} />}

      {/* <Result /> */}
    </div>
  );
}

export default App;
