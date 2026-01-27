import { useState } from "react";

const Array = () => {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers(prev => {
      const nextNumber = prev.length + 1;
      return [...prev, nextNumber]; // ✅ immutable + prev
    });
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Numbers List</h1>

      <button onClick={addNumber}>
        Add Number
      </button>

      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Array;
