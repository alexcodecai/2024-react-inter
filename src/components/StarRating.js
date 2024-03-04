import React, { useState, useEffect } from "react";

export default function ColorPicker() {
  const [starCount, setStarCount] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);
  return (
    <div className='starApp'>
      Star Rating
      <div className='star'>
        {[...Array(5)].map((star, index) => {
          return (
            <span
              key={index}
              className={`${index + 1 <= starCount ? "selected" : ""} ${
                index + 1 <= hoverCount ? "selected" : ""
              }`}
              onClick={() => setStarCount(index + 1)}
              onMouseOver={() => {
                setHoverCount(index + 1);
              }}
              onMouseOut={() => {
                setHoverCount(0);
              }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <p>Star Count : {starCount}</p>
      <p>Hover Count : {hoverCount}</p>
      <p
        className='reset'
        onClick={() => {
          setStarCount(0);
        }}
      >
        Reset
      </p>
    </div>
  );
}
