import { useEffect, useState } from "react";

const FetchTask = () => {
  /* -------------------------------
     1️⃣ Fetch Products (auto)
  -------------------------------- */
  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(true);
  const [productError, setProductError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setProductError("Failed to load products");
      } finally {
        setProductLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* -------------------------------
     2️⃣ Fetch Users (name + email)
  -------------------------------- */
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setUserError("Failed to load users");
      } finally {
        setUserLoading(false);
      }
    };

    fetchUsers();
  }, []);

  /* -----------------------------------------
     3️⃣ Re-fetch data when URL changes
  ----------------------------------------- */
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, [url]);

  /* -----------------------------------------
     4️⃣ Fetch ONLY on button click
  ----------------------------------------- */
  const [clickData, setClickData] = useState([]);
  const [clickLoading, setClickLoading] = useState(false);

  const fetchOnClick = async () => {
    setClickLoading(true);
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await res.json();
    setClickData(data.slice(0, 5));
    setClickLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>API / Fetch Tasks (Single Component)</h2>

      {/* Products */}
      <h3>Products</h3>
      {productLoading && <p>Loading products...</p>}
      {productError && <p>{productError}</p>}
      {products.slice(0, 3).map(p => (
        <p key={p.id}>{p.title}</p>
      ))}

      {/* Users */}
      <h3>Users</h3>
      {userLoading && <p>Loading users...</p>}
      {userError && <p>{userError}</p>}
      <div style={{ display: "flex", gap: "10px" }}>
        {users.slice(0, 3).map(user => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px"
            }}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

      {/* Re-fetch when URL changes */}
      <h3>Re-fetch When URL Changes</h3>
      <button
        onClick={() =>
          setUrl("https://jsonplaceholder.typicode.com/albums")
        }
      >
        Change URL
      </button>
      <p>Items fetched: {posts.length}</p>

      {/* Fetch on Button Click */}
      <h3>Fetch on Button Click</h3>
      <button onClick={fetchOnClick}>Fetch Comments</button>
      {clickLoading && <p>Loading...</p>}
      {clickData.map(item => (
        <p key={item.id}>{item.email}</p>
      ))}
    </div>
  );
};

export default FetchTask;
