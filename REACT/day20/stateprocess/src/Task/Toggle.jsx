import { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev); // ✅ only prev
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <button onClick={toggleVisibility}>
        Toggle
      </button>

      {isVisible && <h2>This text is visible</h2>}
    </div>
  );
};

export default Toggle;
