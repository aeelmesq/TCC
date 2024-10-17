import { useContext } from "react";
import menuMoreContext from "../Contexts/menuMoreContext";

export default function useMenuMore() {
  const context = useContext(menuMoreContext);

  if (context == undefined) {
    throw new Error("outside context");
  }

  return context;
}
