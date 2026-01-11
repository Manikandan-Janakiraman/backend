import Child from "./Child";

const Parent = ({ users, onUserSelect }) => {
  // Example filter: users older than 23
  const filteredUsers = users.filter((user) => user.age > 23);

  return (
    <div>
      <h3>Parent (Filtered Users)</h3>

      {filteredUsers.map((user) => (
        <Child
          key={user.id}
          user={user}
          onUserSelect={onUserSelect}
        />
      ))}
    </div>
  );
};

export default Parent;
