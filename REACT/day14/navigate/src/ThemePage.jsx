import { useLocation } from "react-router-dom";

const ThemePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const theme = params.get("theme");

  const styles = {
    backgroundColor: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    height: "100vh",
    padding: "20px",
  };

  return (
    <div style={styles}>
      <h2>{theme === "dark" ? "Dark Theme" : "Light Theme"}</h2>
    </div>
  );
};

export default ThemePage;
