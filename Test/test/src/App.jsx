import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import withAuth from "./withAuth";

const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedDashboard />} />
    </Routes>
  );
}

export default App;
