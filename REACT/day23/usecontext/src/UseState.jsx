import React, { useEffect, useRef, useState } from "react";

const UseState = () => {
  /* ----------------------------------
     ✅ Task 1: Previous Value Tracker
  ---------------------------------- */
  const [text, setText] = useState("");
  const prevText = useRef("");

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  /* ----------------------------------
     ✅ Task 2: Stop Re-render Counter
  ---------------------------------- */
  const refCount = useRef(0);
  const [stateCount, setStateCount] = useState(0);

  /* ----------------------------------
     ✅ Task 3: Focus After Update
  ---------------------------------- */
  const [inputValue, setInputValue] = useState("");
  const focusRef = useRef(null);

  const handleSubmit = () => {
    setInputValue("");
    focusRef.current.focus();
  };

  /* ----------------------------------
     ✅ Task 4: Render Count vs State Count
  ---------------------------------- */
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  /* ----------------------------------
     ✅ Task 5: Timer Without Re-render
  ---------------------------------- */
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useState & useRef Tasks</h1>

      {/* Task 1 */}
      <h3>1️⃣ Previous Value Tracker</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Current: {text}</p>
      <p>Previous: {prevText.current}</p>

      <hr />

      {/* Task 2 */}
      <h3>2️⃣ Stop Re-render Counter</h3>
      <button onClick={() => refCount.current += 1}>
        useRef Count (No Re-render)
      </button>
      <button onClick={() => setStateCount(stateCount + 1)}>
        useState Count (Re-render)
      </button>
      <p>useRef Count: {refCount.current}</p>
      <p>useState Count: {stateCount}</p>

      <hr />

      {/* Task 3 */}
      <h3>3️⃣ Focus After Update</h3>
      <input
        ref={focusRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type & submit"
      />
      <button onClick={handleSubmit}>Submit</button>

      <hr />

      {/* Task 4 */}
      <h3>4️⃣ Render Count vs State Count</h3>
      <p>Component Rendered: {renderCount.current} times</p>
      <button onClick={() => setStateCount(stateCount + 1)}>
        Increase State Count
      </button>

      <hr />

      {/* Task 5 */}
      <h3>5️⃣ Timer Without Re-render</h3>
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default UseState;
