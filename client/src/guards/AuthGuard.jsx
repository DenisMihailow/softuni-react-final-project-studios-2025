import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../contexts/UserContext";

export default function PrivateRoute() {
  const { isAuthenticated } = useUserContext();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet/>;
}