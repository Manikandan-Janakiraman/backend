import React, { useState } from "react";

function ProductForm() {
  // 1️⃣ Object state
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    quantity: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // 2️⃣ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value
    });
  };

  // 3️⃣ Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // 4️⃣ Stock status logic
  const getStockStatus = () => {
    const qty = Number(product.quantity);

    if (qty === 0) return "Out of Stock";
    if (qty < 5) return "Low Stock";
    return "In Stock";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Product Form
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow"
        >
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={product.productName}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={product.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {/* Output */}
        {submitted && (
          <div className="bg-white mt-6 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Product Details
            </h2>

            <p><strong>Name:</strong> {product.productName}</p>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Quantity:</strong> {product.quantity}</p>

            <p
              className={`mt-3 font-bold ${
                Number(product.quantity) === 0
                  ? "text-red-600"
                  : Number(product.quantity) < 5
                  ? "text-yellow-600"   // 1 < 5 2<5 3<5 4<5   
                  : "text-green-600"  // 5=5
              }`}
            >
              {getStockStatus()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductForm;
