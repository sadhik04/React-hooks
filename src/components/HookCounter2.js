import React, { useState } from 'react';
import './hookCounter.css';
const HookCounter2 = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <h1>
        Count: <span style={{ color: 'blueviolet' }}>{count}</span>
      </h1>
      <button className="increment_btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="decrement_btn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="increment5_btn" onClick={incrementFive}>
        Increment 5
      </button>
      <button className="decrement5_btn" onClick={decrementFive}>
        Decrement 5
      </button>
      <button className="reset_btn" onClick={() => setCount(initialValue)}>
        Reset
      </button>
    </div>
  );
};

export default HookCounter2;
