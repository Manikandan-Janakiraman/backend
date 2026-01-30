import { useEffect, useState } from "react";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(true);
  const [search, setSearch] = useState("");

  // Task 1, 3, 4, 5, 6, 7, 9, 10
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  // Task 2 & 8 – fetch on button click
  const fetchOnClick = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  };

  // Task 5 – Reverse data
  const reverseData = () => {
    setData([...data].reverse());
  };

  // Task 6 – Remove by id
  const removeItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Task 9 – Sort alphabetically
  const sortByName = () => {
    const sorted = [...data].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setData(sorted);
  };

  // Task 7 – Search filter
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React API Tasks (1–10)</h2>

      {/* Task 2 & 8 */}
      <button onClick={fetchOnClick}>Fetch Data on Click</button>
      {loading && <p>Loading...</p>}
      {!loading && data.length > 0 && (
        <p>Total Records: {data.length}</p>
      )}

      <hr />

      {/* Task 3 */}
      <button onClick={() => setShowData(!showData)}>
        {showData ? "Hide Data" : "Show Data"}
      </button>

      {/* Task 5, 6, 9 */}
      <button onClick={reverseData}>Reverse</button>
      <button onClick={sortByName}>Sort by Name</button>

      {/* Task 7 */}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <hr />

      {/* Task 10 */}
      {showData && (
        <>
          {filteredData.length === 0 ? (
            <p>No Data Found</p>
          ) : (
            <ul>
              {/* Task 4 – first 5 records */}
              {filteredData.slice(0, 5).map((user) => (
                <li key={user.id}>
                  {user.name}
                  {/* Task 6 */}
                  <button
                    onClick={() => removeItem(user.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default App;