import React, { useState } from "react";

function LoginForm() {
  // 1️⃣ Object state
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: ""
  });

  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // 2️⃣ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value
    });

    setError("");
  };

  // 3️⃣ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, role } = loginData;

    if (!username || !password || !role) {
      setError("All fields are required");
      return;
    }

    setLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Login
        </h1>

        {!loggedIn ? (
          <>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
              />

              <select
                name="role"
                value={loginData.role}
                onChange={handleChange}
                className="w-full p-2 border rounded mb-3"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

              {error && (
                <p className="text-red-600 text-sm mb-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </>
        ) : (
          /* Role-based rendering */
          <div className="text-center">
            {loginData.role === "admin" ? (
              <h2 className="text-2xl font-bold text-purple-600">
                Admin Dashboard
              </h2>
            ) : (
              <h2 className="text-2xl font-bold text-green-600">
                User Dashboard
              </h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
