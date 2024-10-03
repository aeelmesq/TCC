import { Menu, MenuItem } from "./Menu";
import { useEffect, useCallback } from "react";
import "../../StyleComponents/AsideBar.css";
import { useLocation } from "react-router-dom";

export default function AsideBar() {
  const location = useLocation();

  useEffect(() => window.scrollTo(0, 0), [window, location]);

  return (
    <>
      <Menu style={"AsideBar"}>
        <MenuItem path={"ALT/"} onActive={"on"} onPending={"of"}>
          <i class="bi bi-house-door-fill"></i>
          Home
        </MenuItem>
        <MenuItem path={"/forYou"} onActive={"on"} onPending={"of"}>
          <i class="bi bi-newspaper"></i>
          Para você
        </MenuItem>
        <MenuItem path={"/preferencias"} onActive={"on"} onPending={"of"}>
          <i class="bi bi-bookmarks"></i>
          Preferências
        </MenuItem>
        <MenuItem path={"/penapolis"} onActive={"on"} onPending={"of"}>
          <i class="bi bi-geo-alt"></i>
          Penápolis
        </MenuItem>
        <MenuItem path={"/regiao"} onActive={"on"} onPending={"of"}>
          <i class="bi bi-pin"></i>
          Região
        </MenuItem>
        <MenuItem path={"/brasil"} onActive={"on"} onPending={"of"}>
          <i class="bi bi-globe-americas"></i>
          Brasil
        </MenuItem>
      </Menu>
    </>
  );
}
