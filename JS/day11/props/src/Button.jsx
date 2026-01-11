import PropTypes from "prop-types";

const Button = ({ label, variant, onClick }) => {
  const styles = {
    primary: {
      backgroundColor: "#0d6efd",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        padding: "10px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        marginRight: "10px",
      }}
    >
      {label}
    </button>
  );
};

/* ✅ Default Props */
Button.defaultProps = {
  variant: "primary",
};

/* ✅ Prop Types */
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
