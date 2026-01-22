import { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function CounterHOC(props) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={increment}
      />
    );
  };
};

export default withCounter;
