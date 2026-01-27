import { useState } from "react";

const Validation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ stop refresh

    // 1️⃣ Empty field check
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return; // ⛔ stop execution
    }

    // 2️⃣ Email validation
    if (!formData.email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    // 3️⃣ Password validation
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // ✅ Passed all validations
    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Validation Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Validation;
