import { useState } from "react";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setSubmittedUsername(username);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Enter Username
          </h2>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-semibold"
          >
            Submit
          </button>
        </form>

        {submittedUsername && (
          <p className="mt-4 text-center text-gray-700">
            Entered Username: <span className="font-semibold">{submittedUsername}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UsernameForm;
