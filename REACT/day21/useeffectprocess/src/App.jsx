import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // TASK 1 & 6
  const [goodNum, setGoodNum] = useState("");

  // TASK 2
  const [rangeNum, setRangeNum] = useState("");

  // TASK 3
  const [submitCount, setSubmitCount] = useState(0);

  // TASK 4
  const [patternNum, setPatternNum] = useState("");

  // TASK 5
  const [resetNum, setResetNum] = useState("");

  // TASK 1 & 6
  const handleGoodNumber = (e) => {
    e.preventDefault();
    const n = Number(goodNum);

    if (n >= 10 && n <= 100 && n % 10 === 0) {
      toast.success("Good Number");
    } else {
      toast.error("Not a Good Number");
    }
  };

  // TASK 2
  const handleRangeValidation = (e) => {
    e.preventDefault();
    const n = Number(rangeNum);

    if (n >= 50 && n <= 150 && n % 5 === 0) {
      toast.success("Valid Number");
    } else {
      toast.error("Invalid Number");
    }
  };

  // TASK 3
  const handleLimitedSubmit = (e) => {
    e.preventDefault();

    if (submitCount >= 3) {
      toast.error("Limit Reached");
      return;
    }

    setSubmitCount((prev) => prev + 1);
    toast.success(`Submitted ${submitCount + 1} times`);
  };

  // TASK 4
  const handlePatternCheck = (e) => {
    e.preventDefault();

    if (/^9\d{3}$/.test(patternNum)) {
      toast.success("Accepted Number");
    } else {
      toast.error("Rejected Number");
    }
  };

  // TASK 5
  const handleConditionalReset = (e) => {
    e.preventDefault();
    const n = Number(resetNum);

    if (n % 3 === 0 && n % 5 === 0) {
      toast.success("Special Number");
      setResetNum("");
    } else {
      toast.info("Normal Number");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useState Logic Tasks</h2>

      {/* TASK 1 & 6 */}
      <form onSubmit={handleGoodNumber}>
        <h4>Good Number Checker</h4>
        <input value={goodNum} onChange={(e) => setGoodNum(e.target.value)} />
        <button>Check</button>
      </form>

      <hr />

      {/* TASK 2 */}
      <form onSubmit={handleRangeValidation}>
        <h4>Range Validation</h4>
        <input value={rangeNum} onChange={(e) => setRangeNum(e.target.value)} />
        <button>Validate</button>
      </form>

      <hr />

      {/* TASK 3 */}
      <form onSubmit={handleLimitedSubmit}>
        <h4>Attempt Limited Submit</h4>
        <input />
        <button>Submit</button>
      </form>

      <hr />

      {/* TASK 4 */}
      <form onSubmit={handlePatternCheck}>
        <h4>Pattern Check</h4>
        <input
          value={patternNum}
          onChange={(e) => setPatternNum(e.target.value)}
        />
        <button>Check</button>
      </form>

      <hr />

      {/* TASK 5 */}
      <form onSubmit={handleConditionalReset}>
        <h4>Conditional Reset</h4>
        <input
          value={resetNum}
          onChange={(e) => setResetNum(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
