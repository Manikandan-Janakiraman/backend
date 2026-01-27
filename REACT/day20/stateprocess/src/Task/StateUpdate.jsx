import { useState } from "react";

const StateUpdate = () => {
  const [count, setCount] = useState(0);

  // ❌ Wrong way: stale state (batched)
  const handleWrong = () => {
    setCount(count + 1);
    console.log("Wrong 1:", count);

    setCount(count + 1);
    console.log("Wrong 2:", count);

    setCount(count + 1);
    console.log("Wrong 3:", count);
  };

  // ✅ Correct way: functional update
  const handleCorrect = () => {
    setCount(prev => {
      console.log("Correct 1:", prev);
      return prev + 1;
    });

    setCount(prev => {
      console.log("Correct 2:", prev);
      return prev + 1;
    });

    setCount(prev => {
      console.log("Correct 3:", prev);
      return prev + 1;
    });
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Counter: {count}</h1>

      <button onClick={handleWrong} style={{ marginRight: "10px" }}>
        +3 Wrong
      </button>

      <button onClick={handleCorrect}>
        +3 Correct
      </button>
    </div>
  );
};

export default StateUpdate;
