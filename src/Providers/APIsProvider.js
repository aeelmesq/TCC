import APIsContext from "../Contexts/APIContext";
import API_NEWS from "../API/mediaStack";

export default function APIsProvider({ children }) {
  const Data = API_NEWS();

  return (
    <APIsContext.Provider value={{ Data }}>{children}</APIsContext.Provider>
  );
}
