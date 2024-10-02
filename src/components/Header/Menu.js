import { NavLink } from "react-router-dom";

function MenuItem({ link, label }) {
  return (
    <>
      <li className="MenuItem">
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? "on" : "of")}
        >
          {label}
        </NavLink>
      </li>
    </>
  );
}

function Menu() {
  return (
    <>
      <ul className="menu">
        <MenuItem link={"ALT/"} label={"Home"} />
        <MenuItem link={"/forYou"} label={"Para você"} />
      </ul>
    </>
  );
}

export default Menu;
