import { useEffect, useState } from "react";

const Hooks = () => {
  /* 1️⃣ Counter */
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  /* 2️⃣ Toggle */
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(prev => !prev);

  /* 3️⃣ Input */
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => setInputValue(e.target.value);

  /* 4️⃣ Fetch Users */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  /* 5️⃣ Timer */
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Hooks in Single Component</h2>

      {/* Counter */}
      <h3>Counter</h3>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {/* Toggle */}
      <h3>Toggle</h3>
      <button onClick={toggle}>Toggle</button>
      <p>{isOn ? "ON" : "OFF"}</p>

      {/* Input */}
      <h3>Input</h3>
      <input value={inputValue} onChange={handleChange} />
      <p>Value: {inputValue}</p>

      {/* Timer */}
      <h3>Timer</h3>
      <p>Seconds: {seconds}</p>

      {/* Fetch Users */}
      <h3>Users</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))
      )}
    </div>
  );
};

export default Hooks;
