import { useCallback, useEffect, useState } from "react";
import menuMoreContext from "../Contexts/menuMoreContext";

export default function MenuMoreProvider({ children }) {
  const [menuState, setMenuState] = useState(false);

  const handleMenuState = useCallback((event = { sdf: 9 }) => {
    event.preventDefault();
    setMenuState((prevInfo) => !prevInfo);
  }, []);

  useEffect(() => {
    if (menuState) {
      let timeOutId = setTimeout(() => {
        document.body.addEventListener("click", handleMenuState);
      }, 100);

      return () => {
        clearTimeout(timeOutId);
        document.body.removeEventListener("click", handleMenuState);
      };
    }
  }, [menuState, handleMenuState]);

  return (
    <menuMoreContext.Provider value={{ handleMenuState, menuState }}>
      {children}
    </menuMoreContext.Provider>
  );
}
