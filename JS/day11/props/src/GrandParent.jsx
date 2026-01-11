import Parent from "./Parent";

const GrandParent = () => {
  const users = [
    { id: 1, name: "John", age: 25, city: "Chennai" },
    { id: 2, name: "Sara", age: 30, city: "Bangalore" },
    { id: 3, name: "Mike", age: 22, city: "Mumbai" },
  ];

  const handleUserSelect = (user) => {
    alert(`Selected User: ${user.name}`);
  };

  return (
    <div>
      <h2>Grandparent</h2>
      <Parent users={users} onUserSelect={handleUserSelect} />
    </div>
  );
};

export default GrandParent;
