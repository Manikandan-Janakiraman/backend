import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseByFive = () => {
    setCount(prev => prev + 5);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Count: {count}</h1>

      <button onClick={increaseByFive}>
        Increase by 5
      </button>
    </div>
  );
};

export default Counter;
