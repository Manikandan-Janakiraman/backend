import React, { useState } from "react";

function AddressForm() {
  // 1️⃣ Nested object state
  const [user, setUser] = useState({
    name: "",
    address: {
      street: "",
      city: "",
      pincode: ""
    }
  });

  const [submitted, setSubmitted] = useState(false);

  // 2️⃣ Handle input change (nested update)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If input belongs to address
    if (name === "street" || name === "city" || name === "pincode") {
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value
        }
      }));
    } else {
      // Name field
      setUser((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // 3️⃣ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Address Form
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <input
            type="text"
            name="street"
            placeholder="Street"
            value={user.address.street}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={user.address.city}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            value={user.address.pincode}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>

        {/* Output */}
        {submitted && (
          <div className="bg-white mt-6 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Address Details
            </h2>

            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Street:</strong> {user.address.street}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Pincode:</strong> {user.address.pincode}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddressForm;
