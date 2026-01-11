import { useState } from "react";
import Counter from "./Counter";

const CounterApp = () => {
  const [total, setTotal] = useState(0);

  const increment = () => {
    setTotal(prev => prev + 1);
  };

  const decrement = () => {
    setTotal(prev => prev - 1);
  };

  return (
    <div>
      <h2>Total Count: {total}</h2>

      <Counter
        count={total}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};

export default CounterApp;
