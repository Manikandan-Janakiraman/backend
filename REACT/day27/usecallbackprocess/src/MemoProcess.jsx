import { useEffect, useMemo, useState } from "react";

const MemoProcess = () => {
  /* ================================
     1️⃣ Counter + Heavy Calculation
  ================================= */
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const heavyCalculation = useMemo(() => {
    console.log("Heavy calculation running...");
    let total = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  /* ================================
     2️⃣ Fetch Products + Total Price
  ================================= */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const totalPrice = useMemo(() => {
    console.log("Total price recalculated");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  /* ================================
     3️⃣ Search in Big Array (1000)
  ================================= */
  const bigList = useMemo(
    () => Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`),
    []
  );
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    console.log("Filtering list...");
    return bigList.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, bigList]);

  /* ================================
     4️⃣ Factorial Calculation
  ================================= */
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => {
    console.log("Factorial recalculated");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  /* ================================
     5️⃣ Sorted Array (Theme Independent)
  ================================= */
  const numbers = useMemo(
    () => Array.from({ length: 500 }, () => Math.floor(Math.random() * 1000)),
    []
  );

  const sortedNumbers = useMemo(() => {
    console.log("Sorting numbers...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">useMemo Tasks Demo</h1>

      {/* 1️⃣ Counter */}
      <section className="mb-6">
        <h2 className="font-semibold">Counter + Heavy Calculation</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>Count: {count}</p>
        <p>Result: {heavyCalculation}</p>
      </section>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="mb-6 px-4 py-2 border"
      >
        Toggle Theme
      </button>

      {/* 2️⃣ Products */}
      <section className="mb-6">
        <h2 className="font-semibold">Total Price (50 Products)</h2>
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </section>

      {/* 3️⃣ Search */}
      <section className="mb-6">
        <h2 className="font-semibold">Search (1000 Items)</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2"
          placeholder="Search..."
        />
        <p>Results: {filteredList.length}</p>
      </section>

      {/* 4️⃣ Factorial */}
      <section className="mb-6">
        <h2 className="font-semibold">Factorial</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="border p-2"
        />
        <p>Factorial: {factorial}</p>
      </section>

      {/* 5️⃣ Sorted Numbers */}
      <section>
        <h2 className="font-semibold">Sorted Numbers</h2>
        <p>First 10: {sortedNumbers.slice(0, 10).join(", ")}</p>
      </section>
    </div>
  );
};

export default MemoProcess;
