import { useState } from "react";

const MultiInput = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Single handler for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value   // 🔥 dynamic key
    }));
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Multi Input Form</h1>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br /><br />

      <hr />

      <h3>Entered Data</h3>
      <p><b>Username:</b> {formData.username}</p>
      <p><b>Email:</b> {formData.email}</p>
      <p><b>Password:</b> {formData.password}</p>
    </div>
  );
};

export default MultiInput;
