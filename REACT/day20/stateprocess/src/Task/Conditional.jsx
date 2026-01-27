import { useState } from "react";

const Conditional = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Conditional UI</h1>

      {/* TRUE condition */}
      {isLoggedIn && <h2>Welcome User</h2>}

      {/* FALSE condition */}
      {!isLoggedIn && <h2>Please Login</h2>}

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Conditional;
