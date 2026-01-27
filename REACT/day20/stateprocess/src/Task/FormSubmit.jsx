import { useState } from "react";

const FormSubmit = () => {
  const [submitCount, setSubmitCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    setSubmitCount(prev => prev + 1); // ✅ only previous state
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Form Submit Counter</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder="Type something..." />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted: {submitCount} times</h2>
    </div>
  );
};

export default FormSubmit;
