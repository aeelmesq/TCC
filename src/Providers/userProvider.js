import { useState } from "react";
import userContext from "../Contexts/userContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: Number(),
    Name: "",
    email: "",
    age: Number(),
  });

  const [themem, setTheme] = useState("black");

  return (
    <userContext.Provider value={{ user, setUser, themem, setTheme }}>
      {children}
    </userContext.Provider>
  );
}
