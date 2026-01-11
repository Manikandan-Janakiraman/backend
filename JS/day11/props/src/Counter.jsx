const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={decrement}>−</button>
      <span style={{ margin: "0 12px" }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
