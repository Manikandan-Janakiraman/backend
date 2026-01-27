import { useState } from "react";

const ImmutableObject = () => {
  const [user, setUser] = useState({
    name: "",
    age: 25
  });

  // ❌ WRONG: Mutating the same object
  const mutateState = () => {
    user.name = "John";          // mutation
    console.log("Same reference:", user);
    setUser(user);               // same object reference
  };

  // ✅ CORRECT: Immutable update using spread
  const immutableUpdate = () => {
    const newUser = {
      ...user,
      name: "John"
    };

    console.log("New reference:", newUser);
    console.log("Reference equal?", user === newUser); // false

    setUser(newUser);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Profile</h1>

      <p><b>Name:</b> {user.name}</p>
      <p><b>Age:</b> {user.age}</p>

      <button onClick={mutateState} style={{ marginRight: "10px" }}>
        Mutate State ❌
      </button>

      <button onClick={immutableUpdate}>
        Immutable Update ✅
      </button>
    </div>
  );
};

export default ImmutableObject;
