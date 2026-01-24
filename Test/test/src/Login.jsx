import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (validUser) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <input
        placeholder="Email"
        onChange={(e) =>
          setLoginData({ ...loginData, email: e.target.value })
        }
      />
      <input
        placeholder="Password"
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
