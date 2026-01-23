import React, { useState } from "react";

function EditProfile() {
  // 1️⃣ Default user object
  const [user, setUser] = useState({
    name: "",
    email: "",
    city: ""
  });

  const [updated, setUpdated] = useState(false);

  // 2️⃣ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value
    }));

    setUpdated(false); // reset message while editing
  };

  // 3️⃣ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdated(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Edit Profile
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full p-2 border rounded mb-3"
          />

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full p-2 border rounded mb-3"
          />

          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
            placeholder="Enter city"
            className="w-full p-2 border rounded mb-4"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Update Profile
          </button>
        </form>

        {/* Success Message */}
        {updated && (
          <p className="text-green-600 text-center font-semibold mt-4">
            Profile Updated Successfully
          </p>
        )}
      </div>
    </div>
  );
}

export default EditProfile;
