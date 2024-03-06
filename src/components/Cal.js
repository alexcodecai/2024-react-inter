import React, { useState, useEffect } from "react";

export default function Cal() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const operators = ["-", "*", "+", "/"];

  const UpDateDisPlay = val => {
    setDisplay(display + val);

    if (operators.includes(val) === false) {
      setResult(eval(display + val).toString());
    } else {
      setResult("error");
    }
  };

  const hanldeResult = () => {
    setDisplay(result);
  };

  return (
    <>
      <div className='calGrid'>
        <div className='display'>{display || "0"}</div>
        <div className='row'>
          <button className='btn button-primary' onClick={() => setDisplay("")}>
            AE
          </button>
          <button
            className='btn button-primary'
            onClick={() => setDisplay(result.slice(0, -1))}
          >
            DEl
          </button>
          <button
            className='btn button-primary'
            onClick={() => UpDateDisPlay("/")}
          >
            %
          </button>
          <button className='btn button-primary'>/</button>
        </div>
        <div className='row'>
          <button className='btn' onClick={() => UpDateDisPlay(7)}>
            7
          </button>
          <button className='btn' onClick={() => UpDateDisPlay(8)}>
            8
          </button>
          <button className='btn' onClick={() => UpDateDisPlay(9)}>
            9
          </button>
          <button className='btn' onClick={() => UpDateDisPlay("*")}>
            X
          </button>
        </div>
        <div className='row'>
          <button className='btn' onClick={() => UpDateDisPlay(4)}>
            4
          </button>
          <button className='btn' onClick={() => UpDateDisPlay(5)}>
            5
          </button>
          <button className='btn' onClick={() => UpDateDisPlay(6)}>
            6
          </button>
          <button className='btn' onClick={() => UpDateDisPlay("-")}>
            -
          </button>
        </div>
        <div className='row'>
          <button className='btn' onClick={() => UpDateDisPlay(1)}>
            1
          </button>
          <button className='btn' onClick={() => UpDateDisPlay(2)}>
            2
          </button>
          <button className='btn' onClick={() => UpDateDisPlay(3)}>
            3
          </button>
          <button className='btn' onClick={() => UpDateDisPlay("+")}>
            +
          </button>
          <div className='row'>
            <button className='btn' onClick={() => UpDateDisPlay(0)}>
              0
            </button>
            <button className='btn' onClick={() => UpDateDisPlay(".")}>
              .
            </button>
            <button className='btn-result' onClick={hanldeResult}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
