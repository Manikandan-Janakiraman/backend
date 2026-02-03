import { useEffect, useState } from "react";

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  /* -----------------------------
     Fetch Products
  ------------------------------ */
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  /* -----------------------------
     Remove Duplicate Categories
  ------------------------------ */
  const categories = [
    "all",
    ...new Set(products.map(p => p.category))
  ];

  /* -----------------------------
     Search by Title
  ------------------------------ */
  const searchedProducts = products.filter(product =>
    product.title
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  /* -----------------------------
     Filter by Category
  ------------------------------ */
  const filteredProducts =
    category === "all"
      ? searchedProducts
      : searchedProducts.filter(
          product => product.category === category
        );

  /* -----------------------------
     Sort by Price
  ------------------------------ */
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Search / Filter / Sort</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        style={{ marginRight: "10px" }}
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
      >
        <option value="">Sort by price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      {/* Products */}
      <div style={{ marginTop: "20px" }}>
        {sortedProducts.map(product => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h4>{product.title}</h4>
            <p>₹ {product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
