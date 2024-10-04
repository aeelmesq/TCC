import userContext from "../Contexts/userContext";
import { useContext } from "react";

export default function useUser() {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error("Outside context");
  }

  return context;
}
