import React, { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  /* ---------------- Fetch Categories ---------------- */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  /* ---------------- Fetch Products ---------------- */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  /* ---------------- Filter Logic ---------------- */
  const filteredProducts =
    selectedCategory === ""
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Product Category Filter
        </h1>

        {/* ---------- Dropdown ---------- */}
        <select
          className="border border-gray-300 rounded-md px-3 py-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* ---------- Empty State ---------- */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No products available in this category
          </p>
        ) : (
          /* ---------- Product Grid ---------- */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 space-y-2"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain"
                />
                <h3 className="font-semibold text-sm">
                  {product.title}
                </h3>
                <p className="text-green-600 font-bold">
                  ₹ {product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
