import React, {
  useState,
  useReducer,
  useRef,
  useEffect,
  lazy,
  Suspense,
} from "react";

/* ---------------- UTILITIES ---------------- */

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const throttle = (fn, limit) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
};

/* ---------------- TASK 1: SEARCH ---------------- */

const historyReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

const SearchResult = lazy(() =>
  Promise.resolve({
    default: ({ text }) => <p>Searching for: {text}</p>,
  })
);

/* ---------------- TASK 2: SCROLL ---------------- */

const scrollReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state].slice(0, 5);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

/* ---------------- TASK 3: FORM ---------------- */

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { name: "", email: "", password: "" };
    default:
      return state;
  }
};

/* ---------------- TASK 4 + 6: THEME & FONT ---------------- */

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, dark: !state.dark };
    case "INC":
      return { ...state, fontSize: state.fontSize + 2 };
    case "DEC":
      return { ...state, fontSize: state.fontSize - 2 };
    default:
      return state;
  }
};

const Preview = lazy(() =>
  Promise.resolve({
    default: ({ theme }) => (
      <div
        style={{
          padding: 10,
          background: theme.dark ? "#222" : "#eee",
          color: theme.dark ? "#fff" : "#000",
          fontSize: theme.fontSize,
        }}
      >
        Lazy Loaded Preview Text
      </div>
    ),
  })
);

/* ---------------- TASK 5: TODO ---------------- */

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
};

/* ---------------- MAIN APP ---------------- */

export default function App() {
  /* TASK 1 */
  const searchRef = useRef();
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [history, historyDispatch] = useReducer(historyReducer, []);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const debouncedSearch = useRef(
    debounce((value) => {
      setSearchCount((c) => c + 1);
      historyDispatch({ type: "ADD", payload: value });
    }, 1000)
  ).current;

  /* TASK 2 */
  const [scrollCount, setScrollCount] = useState(0);
  const [positions, scrollDispatch] = useReducer(scrollReducer, []);
  const prevScroll = useRef(0);

  useEffect(() => {
    const onScroll = throttle(() => {
      setScrollCount((c) => c + 1);
      scrollDispatch({ type: "ADD", payload: window.scrollY });
      prevScroll.current = window.scrollY;
    }, 1000);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* TASK 3 */
  const [form, formDispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
  });
  const [submitCount, setSubmitCount] = useState(0);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  /* TASK 4 & 6 */
  const [theme, themeDispatch] = useReducer(themeReducer, {
    dark: false,
    fontSize: 16,
  });
  const [changeCount, setChangeCount] = useState(0);
  const prevFont = useRef(theme.fontSize);

  /* TASK 5 */
  const [todos, todoDispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [todoCount, setTodoCount] = useState(0);
  const todoInputRef = useRef();

  const debouncedTodo = useRef(
    debounce((v) => setTodoText(v), 500)
  ).current;

  return (
    <div style={{ padding: 20, minHeight: "200vh" }}>
      Lazy Loading

      {/* TASK 1 */}
      <h2>🧪 Task 1 – Debounced Search</h2>
      <input
        ref={searchRef}
        placeholder="Search..."
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      <p>Search Count: {searchCount}</p>
      <button onClick={() => historyDispatch({ type: "CLEAR" })}>
        Clear History
      </button>
      <ul>{history.map((h, i) => <li key={i}>{h}</li>)}</ul>

      <Suspense fallback={<p>Loading...</p>}>
        <SearchResult text={search} />
      </Suspense>

      {/* TASK 2 */}
      <h2>🧪 Task 2 – Scroll Counter</h2>
      <p>Scroll Count: {scrollCount}</p>
      <button onClick={() => scrollDispatch({ type: "CLEAR" })}>
        Clear Positions
      </button>
      <ul>{positions.map((p, i) => <li key={i}>{p}px</li>)}</ul>

      {/* TASK 3 */}
      <h2>🧪 Task 3 – Form</h2>
      <input
        ref={nameRef}
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          formDispatch({ type: "SET", field: "name", value: e.target.value })
        }
        onKeyDown={(e) => e.key === "Enter" && emailRef.current.focus()}
      />
      <input
        ref={emailRef}
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          formDispatch({ type: "SET", field: "email", value: e.target.value })
        }
        onKeyDown={(e) => e.key === "Enter" && passRef.current.focus()}
      />
      <input
        ref={passRef}
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          formDispatch({ type: "SET", field: "password", value: e.target.value })
        }
      />
      <button
        onClick={() => {
          setSubmitCount((c) => c + 1);
          formDispatch({ type: "RESET" });
        }}
      >
        Submit
      </button>
      <p>Submitted: {submitCount}</p>

      {/* TASK 4 & 6 */}
      <h2>🧪 Task 4 & 6 – Theme & Font</h2>
      <button
        onClick={() => {
          themeDispatch({ type: "TOGGLE" });
          setChangeCount((c) => c + 1);
        }}
      >
        Toggle Theme
      </button>
      <button
        onClick={() => {
          prevFont.current = theme.fontSize;
          themeDispatch({ type: "INC" });
          setChangeCount((c) => c + 1);
        }}
      >
        A+
      </button>
      <button
        onClick={() => {
          prevFont.current = theme.fontSize;
          themeDispatch({ type: "DEC" });
          setChangeCount((c) => c + 1);
        }}
      >
        A-
      </button>
      <p>Changes: {changeCount}</p>

      <Suspense fallback={<p>Loading Preview...</p>}>
        <Preview theme={theme} />
      </Suspense>

      {/* TASK 5 */}
      <h2>🧪 Task 5 – Todo</h2>
      <input
        ref={todoInputRef}
        placeholder="Add todo"
        onChange={(e) => debouncedTodo(e.target.value)}
      />
      <button
        onClick={() => {
          todoDispatch({ type: "ADD", payload: todoText });
          setTodoCount((c) => c + 1);
          todoInputRef.current.focus();
        }}
      >
        Add
      </button>
      <p>Total Added: {todoCount}</p>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => todoDispatch({ type: "DELETE", index: i })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
