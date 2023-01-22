import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "../components";

const PrivateRoutes = () => {
  const [user, loading] = useAuthState(auth);
  
  return user ? <Outlet /> : !user ? <Loader /> : <Navigate to="/" />;
};

export default PrivateRoutes;
