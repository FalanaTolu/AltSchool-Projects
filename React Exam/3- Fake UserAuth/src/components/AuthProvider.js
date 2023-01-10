import { useState } from "react";
// import { getUser } from "./auth.js";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Tolu");
  const [password, setPassword] = useState("12345");

  const authedValue = JSON.parse(sessionStorage.getItem("loggedIn"));
  const [authed, setAuthed] = useState(authedValue);

  // useEffect(() => {
  //   const currentUser = user;
  //   setUser(currentUser);
  //   const currentPassword = password;
  //   setPassword(currentPassword);
  // }, []);

  return (
    <AuthContext.Provider
      value={{ user, password, authed, authedValue, setUser, setPassword, setAuthed }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
