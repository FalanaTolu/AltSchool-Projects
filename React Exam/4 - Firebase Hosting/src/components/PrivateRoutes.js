import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "../components";
import { useState } from "react";

const PrivateRoutes = () => {
const [user, loading,] = useAuthState(auth);
// const [authUser, setAuthUser] = useState(undefined);
// if (user) setAuthUser(true);
  return user === undefined ? <Loader /> : user ? <Outlet /> : <Navigate to="/" />;
};


export default PrivateRoutes;
