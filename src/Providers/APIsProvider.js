import APIsContext from "../Contexts/APIContext";

export default function APIsProvider({ children }) {
  return <APIsContext.Provider>{children}</APIsContext.Provider>;
}
