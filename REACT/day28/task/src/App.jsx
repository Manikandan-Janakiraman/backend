import React, { useReducer, useState } from "react";

/* ---------------- TASK 1: Counter with Step ---------------- */

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 5 };
    case "DEC":
      return { count: state.count - 5 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

/* ---------------- TASK 2: Form Input Manager ---------------- */

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return { name: "", email: "", password: "" };
    default:
      return state;
  }
};

/* ---------------- TASK 3: Todo List ---------------- */

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case "CLEAR_ALL":
      return { todos: [] };
    default:
      return state;
  }
};

/* ---------------- TASK 4: Theme + Font Size ---------------- */

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, dark: !state.dark };
    case "INC_FONT":
      return { ...state, fontSize: state.fontSize + 2 };
    case "DEC_FONT":
      return { ...state, fontSize: state.fontSize - 2 };
    default:
      return state;
  }
};

const App = () => {
  /* Reducers */
  const [counter, counterDispatch] = useReducer(counterReducer, { count: 0 });
  const [form, formDispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
  });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });
  const [theme, themeDispatch] = useReducer(themeReducer, {
    dark: false,
    fontSize: 16,
  });

  const [todoInput, setTodoInput] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: theme.dark ? "#111" : "#f5f5f5",
        color: theme.dark ? "#fff" : "#000",
        fontSize: theme.fontSize,
      }}
    >
      <h1>useReducer – All Tasks</h1>

      {/* ---------------- TASK 1 UI ---------------- */}
      <section>
        <h2>🧪 Task 1 – Counter</h2>
        <p>Count: {counter.count}</p>
        <button onClick={() => counterDispatch({ type: "INC" })}>+5</button>
        <button onClick={() => counterDispatch({ type: "DEC" })}>-5</button>
        <button onClick={() => counterDispatch({ type: "RESET" })}>Reset</button>
      </section>

      <hr />

      {/* ---------------- TASK 2 UI ---------------- */}
      <section>
        <h2>🧪 Task 2 – Form</h2>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            formDispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
        <br />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            formDispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            formDispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
        />
        <br />
        <button onClick={() => formDispatch({ type: "RESET" })}>
          Reset Form
        </button>
      </section>

      <hr />

      {/* ---------------- TASK 3 UI ---------------- */}
      <section>
        <h2>🧪 Task 3 – Todo List</h2>
        <input
          placeholder="Add todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          onClick={() => {
            if (todoInput.trim()) {
              todoDispatch({ type: "ADD_TODO", payload: todoInput });
              setTodoInput("");
            }
          }}
        >
          Add
        </button>

        <ul>
          {todoState.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                onClick={() =>
                  todoDispatch({ type: "DELETE_TODO", payload: index })
                }
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => todoDispatch({ type: "CLEAR_ALL" })}>
          Clear All
        </button>
      </section>

      <hr />

      {/* ---------------- TASK 4 UI ---------------- */}
      <section>
        <h2>🧪 Task 4 – Theme & Font</h2>
        <p>This text changes theme and font size</p>
        <button onClick={() => themeDispatch({ type: "TOGGLE_THEME" })}>
          Toggle Theme
        </button>
        <button onClick={() => themeDispatch({ type: "INC_FONT" })}>
          A+
        </button>
        <button onClick={() => themeDispatch({ type: "DEC_FONT" })}>
          A-
        </button>
      </section>
    </div>
  );
};

export default App;
