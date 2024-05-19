import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Spinner></Spinner>;
  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRoute;
