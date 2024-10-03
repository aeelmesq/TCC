import { Menu, MenuItem } from "./Menu";
import "../../StyleComponents/AsideBar.css";

export default function AsideBar() {
  return (
    <>
      <Menu style={"AsideBar"}>
        <MenuItem path={"ALT/"} isActive={"on"} isPending={"of"}>
          Home
        </MenuItem>
        <MenuItem path={"/forYou"} isActive={"on"} isPending={"of"}>
          Para você
        </MenuItem>
      </Menu>
    </>
  );
}
