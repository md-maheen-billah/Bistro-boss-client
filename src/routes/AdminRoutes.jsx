import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) return <Spinner></Spinner>;
  if (user && isAdmin) return children;

  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default AdminRoutes;
