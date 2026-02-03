import { useEffect, useRef, useState } from "react";

const AdvancedHooks = () => {
  /* -----------------------------
     1️⃣ useDebounce logic
  ------------------------------ */
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  /* -----------------------------
     2️⃣ useLocalStorage logic
  ------------------------------ */
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  /* -----------------------------
     3️⃣ useWindowSize logic
  ------------------------------ */
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  /* -----------------------------
     4️⃣ useOnlineStatus logic
  ------------------------------ */
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  /* -----------------------------
     5️⃣ usePrevious logic
  ------------------------------ */
  const prevSearchRef = useRef();
  useEffect(() => {
    prevSearchRef.current = search;
  }, [search]);

  const previousSearch = prevSearchRef.current;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Advanced Hooks – Single Component</h2>

      {/* Debounce */}
      <h3>Debounced Search</h3>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Type to search..."
      />
      <p>Debounced Value: {debouncedSearch}</p>
      <p>Previous Value: {previousSearch}</p>

      {/* Local Storage */}
      <h3>Local Storage</h3>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Saved Name: {name}</p>

      {/* Window Size */}
      <h3>Window Size</h3>
      <p>
        Width: {windowSize.width}px | Height:{" "}
        {windowSize.height}px
      </p>

      {/* Online Status */}
      <h3>Online Status</h3>
      <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
};

export default AdvancedHooks;
