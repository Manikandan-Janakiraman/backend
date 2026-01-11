import PropTypes from "prop-types";

const Child = ({ user, onUserSelect }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>
        <strong>{user.name}</strong> — {user.age} yrs, {user.city}
      </p>

      <button onClick={() => onUserSelect(user)}>
        Select User
      </button>
    </div>
  );
};

/* ✅ PropTypes with shape() */
Child.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  onUserSelect: PropTypes.func.isRequired,
};

export default Child;
