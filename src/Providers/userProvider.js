import { useEffect, useState } from "react";
import userContext from "../Contexts/userContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: Number(),
    Name: "",
    email: "",
    age: Number(),
  });

  const [theme, setTheme] = useState("light");

  return <userContext.Provider value={theme}>{children}</userContext.Provider>;
}
