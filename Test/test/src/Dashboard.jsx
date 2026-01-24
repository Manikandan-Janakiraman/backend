import { useState } from "react";

function Dashboard() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  const editUser = (index) => {
    const newName = prompt("Enter new name");
    if (!newName) return;

    const updated = [...users];
    updated[index].name = newName;

    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  return (
    <>
      <h2>Dashboard</h2>

      {users.map((user, index) => (
        <div key={index}>
          <p>{user.name} - {user.email}</p>
          <button onClick={() => editUser(index)}>Edit</button>
          <button onClick={() => deleteUser(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
