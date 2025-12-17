import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../contexts/UserContext";

export default function AdminGuard() {

    const { isAuthenticated, isAdmin } = useUserContext();
    if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}