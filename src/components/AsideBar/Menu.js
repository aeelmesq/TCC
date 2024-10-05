import { NavLink } from "react-router-dom";
import menu from "../../Contexts/menuContext";
import { useContext } from "react";

export function MenuItem({ path, onActive, pos, onPending, ...components }) {
  const { active, setActive } = useContext(menu);

  return (
    <li
      onClick={(e) => {
        e.preventDefault();
        setActive(pos);
      }}
    >
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isActive ? onActive || active == pos : isPending ? onPending : ""
        }
      >
        {components.children}
      </NavLink>
    </li>
  );
}

export function Menu({ style, ...components }) {
  return (
    <aside className={style}>
      <ul>{components.children}</ul>
    </aside>
  );
}
