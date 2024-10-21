import { useContext } from "react";
import APIsContext from "../Contexts/APIContext";

export default function useAPI() {
  const Data = useContext(APIsContext);

  if (Data === undefined) {
    throw new Error("API not fount");
  }

  return Data;
}
