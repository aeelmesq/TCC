import { useState, useEffect } from "react";
import userContext from "../Contexts/userContext";
import defaultAvatar from "../img/perfil.jpg";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: Number(),
    Name: "",
    email: "",
    avatar: defaultAvatar,
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
