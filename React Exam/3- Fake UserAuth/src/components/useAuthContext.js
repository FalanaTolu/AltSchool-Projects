import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuthContext = () => {
  const { user, password, authed, authedValue, setUser, setPassword, setAuthed } = useContext(AuthContext);
  if (user === undefined ) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return { user, password, authed, authedValue, setUser, setPassword, setAuthed };
};

export default useAuthContext;
