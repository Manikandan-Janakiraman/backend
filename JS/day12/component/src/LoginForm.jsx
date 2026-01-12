import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Register
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-semibold"
          >
            Register
          </button>
        </form>

        {submittedData && (
          <div className="bg-white mt-6 p-4 rounded-lg shadow-md space-y-1">
            <h3 className="text-xl font-semibold mb-2">Submitted Data:</h3>
            <p>
              <span className="font-semibold">Name:</span> {submittedData.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {submittedData.email}
            </p>
            <p>
              <span className="font-semibold">Mobile:</span> {submittedData.mobile}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
