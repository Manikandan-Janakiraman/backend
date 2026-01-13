import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // redirect after login
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <div className="flex items-center border mb-3 p-2 rounded">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input type="email" placeholder="Email" className="w-full outline-none" />
        </div>

        <div className="flex items-center border mb-4 p-2 rounded">
          <FaLock className="text-gray-400 mr-2" />
          <input type="password" placeholder="Password" className="w-full outline-none" />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          No account? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
