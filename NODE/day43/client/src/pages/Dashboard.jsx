import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const loadDashboard = async () => {
    try {
      const res = await API.get("/dashboard");
      alert(res.data.message);
    } catch (err) {
      alert("Unauthorized");
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <button onClick={loadDashboard}>Load Dashboard</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}