import { useState } from "react";

const MultipleState = () => {
  const [count, setCount] = useState(0);

  // ❌ WRONG: without previous state (batched)
  const handleWrong = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // ✅ CORRECT: using previous state
  const handleCorrect = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Count: {count}</h1>

      <button onClick={handleWrong} style={{ marginRight: "10px" }}>
        +3 Wrong
      </button>

      <button onClick={handleCorrect}>
        +3 Correct
      </button>
    </div>
  );
};

export default MultipleState;
