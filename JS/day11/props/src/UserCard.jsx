function UserCard({ name, age, city, isAdmin }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", width: "300px" }}>
      <p>
        Hi {name}, {age} years old from {city}
      </p>

      {isAdmin && (
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          Admin
        </span>
      )}
    </div>
  );
}

export default UserCard;
