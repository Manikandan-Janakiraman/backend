import { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ initialData, onSubmit, submitLabel }) => {
  const [name, setName] = useState(initialData.name || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    setError("");
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>User Form</h3>

      <div>
        <label>Name</label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">{submitLabel}</button>
    </form>
  );
};

/* ✅ defaultProps */
UserForm.defaultProps = {
  submitLabel: "Save",
};

/* ✅ PropTypes */
UserForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
};

export default UserForm;
