import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { useCallback, useEffect, useState } from "react";
import "../../StyleComponents/AsideBar.css";
import menu from "../../Contexts/menuContext";
import { useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function AsideBar() {
  const location = useLocation();

  const [active, setActive] = useState(1);

  const { theme, setTheme } = useUser();

  const handleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }, [theme, setTheme]);

  useEffect(() => window.scrollTo(0, 0), [location]);

  return (
    <>
      <menu.Provider value={{ active, setActive }}>
        <Menu style={`AsideBar ${theme}`}>
          <MenuItem path={"ALT/"} pos={1} onActive={"on"} onPending={"on"}>
            <i className={`bi bi-house-door${active === 1 ? "-fill" : ""}`}></i>
            <span>Home</span>
          </MenuItem>
          <MenuItem path={"/forYou"} pos={2} onActive={"on"} onPending={"of"}>
            <i className={`bi bi-collection${active === 2 ? "-fill" : ""}`}></i>
            <span>Para você</span>
          </MenuItem>
          <MenuItem
            path={"/preferencias"}
            pos={3}
            onActive={"on"}
            onPending={"of"}
          >
            <i className={`bi bi-bookmarks${active === 3 ? "-fill" : ""}`}></i>
            <span>Preferências</span>
          </MenuItem>
          <MenuItem
            path={"/penapolis"}
            pos={4}
            onActive={"on"}
            onPending={"of"}
          >
            <i className={`bi bi-geo-alt${active === 4 ? "-fill" : ""}`}></i>
            <span>Penápolis</span>
          </MenuItem>
          <MenuItem path={"/regiao"} pos={5} onActive={"on"} onPending={"of"}>
            <i className={`bi bi-pin${active === 5 ? "-fill" : ""}`}></i>
            <span>Região</span>
          </MenuItem>
          <MenuItem path={"/brasil"} pos={6} onActive={"on"} onPending={"of"}>
            <i className="bi bi-globe-americas"></i>
            <span>Brasil</span>
          </MenuItem>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleTheme();
            }}
          >
            <i className="bi bi-circle-half"></i>
          </button>
        </Menu>
      </menu.Provider>
    </>
  );
}
