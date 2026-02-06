import React, { useCallback, useState } from "react";

/* ============================
   Memoized Child Components
============================ */
const CounterChild = React.memo(({ onIncrement }) => {
  console.log("CounterChild rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

const Item = React.memo(({ item, onDelete }) => {
  console.log("Item rendered:", item);
  return (
    <li>
      {item}
      <button onClick={() => onDelete(item)}>❌</button>
    </li>
  );
});

const InputField = React.memo(({ name, value, onChange }) => {
  console.log("Input rendered:", name);
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      className="border p-2 mr-2"
    />
  );
});

const ActionButton = React.memo(({ label, onClick }) => {
  console.log(label, "button rendered");
  return <button onClick={onClick}>{label}</button>;
});

/* ============================
   Single App Component
============================ */
const ProcessCallBack = () => {
  /* 1️⃣ Theme + Counter */
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  /* 2️⃣ List + Delete */
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  const deleteItem = useCallback((item) => {
    setItems((prev) => prev.filter((i) => i !== item));
  }, []);

  /* 3️⃣ Form Inputs */
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  /* 4️⃣ Multiple Buttons */
  const handleSave = useCallback(() => {
    console.log("Save clicked");
  }, []);

  const handleEdit = useCallback(() => {
    console.log("Edit clicked");
  }, []);

  const handleDelete = useCallback(() => {
    console.log("Delete clicked");
  }, []);

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">useCallback Tasks Demo</h1>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="mb-6 border px-4 py-2"
      >
        Toggle Theme
      </button>

      {/* 1️⃣ Counter */}
      <section className="mb-6">
        <h2 className="font-semibold">Counter</h2>
        <p>Count: {count}</p>
        <CounterChild onIncrement={increment} />
      </section>

      {/* 2️⃣ List */}
      <section className="mb-6">
        <h2 className="font-semibold">Item List</h2>
        <ul>
          {items.map((item) => (
            <Item key={item} item={item} onDelete={deleteItem} />
          ))}
        </ul>
      </section>

      {/* 3️⃣ Form */}
      <section className="mb-6">
        <h2 className="font-semibold">Form</h2>
        <InputField
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <InputField
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </section>

      {/* 4️⃣ Buttons */}
      <section>
        <h2 className="font-semibold">Actions</h2>
        <ActionButton label="Save" onClick={handleSave} />
        <ActionButton label="Edit" onClick={handleEdit} />
        <ActionButton label="Delete" onClick={handleDelete} />
      </section>
    </div>
  );
};

export default ProcessCallBack;
