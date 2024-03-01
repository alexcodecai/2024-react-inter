import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(undefined);

  const pickColor = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };
  const getRandomColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ];
    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");
    return `#${color}`;
  };

  useEffect(() => {
    // const actualColor = getRandomColor();
    // setColor(actualColor);
    // setAnswers(
    //   [actualColor, getRandomColor(), getRandomColor()].sort(
    //     () => 0.5 - Math.random()
    //   )
    // );
    pickColor();
  }, []);

  const handleAnswerClicked = answer => {
    if (answer === color) {
      setResult(false);
      pickColor();
    } else {
      setResult(true);
    }
  };
  return (
    <div className='App'>
      <div className='col'>
        <div className='guess-me' style={{ background: color }}></div>
        {answers.map(answer => (
          <button onClick={() => handleAnswerClicked(answer)} key={answer}>
            {answer}
          </button>
        ))}
        {result === true && <div className='wrong'>Wrong Answer</div>}
        {result === false && <div className='correct'>Correct</div>}
      </div>
    </div>
  );
}

export default App;
