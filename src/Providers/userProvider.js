import { useState, useEffect } from "react";
import userContext from "../Contexts/userContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: Number(),
    Name: "",
    email: "",
  });

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <userContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </userContext.Provider>
  );
}
