import { useCallback, useState } from "react";
import menuMoreContext from "../Contexts/menuMoreContext";

export default function MenuMoreProvider({ children }) {
  const [menuState, setMenuState] = useState(false);

  const handleMenuState = useCallback(
    (event) => {
      event.preventDefault();
      setMenuState((prevInfo) => !prevInfo);
    },
    [menuState]
  );

  return (
    <menuMoreContext.Provider value={{ handleMenuState, menuState }}>
      {children}
    </menuMoreContext.Provider>
  );
}
