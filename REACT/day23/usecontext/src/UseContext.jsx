import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

/* -------------------- CONTEXT -------------------- */
const AppContext = createContext();

/* -------------------- PROVIDER -------------------- */
export const AppProvider = ({ children }) => {
  /* ✅ Task 1: Theme Switcher */
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.background =
      theme === "light" ? "#ffffff" : "#121212";
  }, [theme]);

  /* ✅ Task 2: Global Counter */
  const [count, setCount] = useState(0);

  /* ✅ Task 3: Shared Ref */
  const inputRef = useRef(null);

  /* ✅ Task 4: Login Persistence */
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  /* ✅ Task 5: Render Counter */
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        count,
        setCount,
        inputRef,
        user,
        setUser,
        renderCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* -------------------- COMPONENTS -------------------- */

/* 🔹 Theme Toggle */
const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(AppContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme ({theme})
    </button>
  );
};

/* 🔹 Counter Increment */
const CounterButton = () => {
  const { count, setCount } = useContext(AppContext);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
};

/* 🔹 Counter Display */
const CounterDisplay = () => {
  const { count } = useContext(AppContext);
  return <h3>Global Count: {count}</h3>;
};

/* 🔹 Input Component */
const InputBox = () => {
  const { inputRef } = useContext(AppContext);
  return <input ref={inputRef} placeholder="Focus me" />;
};

/* 🔹 Focus Button */
const FocusButton = () => {
  const { inputRef } = useContext(AppContext);
  return (
    <button onClick={() => inputRef.current.focus()}>
      Focus Input
    </button>
  );
};

/* 🔹 Login Component */
const Login = () => {
  const { user, setUser } = useContext(AppContext);

  return user ? (
    <p>Welcome, {user.name}</p>
  ) : (
    <button onClick={() => setUser({ name: "Manikandan" })}>
      Login
    </button>
  );
};

/* 🔹 Render Count Display */
const RenderTracker = () => {
  const { renderCount } = useContext(AppContext);
  return <p>Render Count: {renderCount.current}</p>;
};

/* -------------------- MAIN APP -------------------- */
const UseContext = () => {
  return (
    <AppProvider>
      <h1>useContext Tasks</h1>

      <ThemeSwitcher />
      <hr />

      <CounterButton />
      <CounterDisplay />
      <hr />

      <InputBox />
      <FocusButton />
      <hr />

      <Login />
      <hr />

      <RenderTracker />
    </AppProvider>
  );
};

export default UseContext;
