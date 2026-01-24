import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  return function ProtectedComponent() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return isLoggedIn ? <Component /> : <Navigate to="/login" />;
  };
};

export default withAuth;
