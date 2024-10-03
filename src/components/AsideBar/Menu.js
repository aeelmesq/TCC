import { NavLink } from "react-router-dom";

export function MenuItem({ path, isActive, isPending, ...components }) {
  return (
    <li>
      <NavLink
        to={path}
        className={(onActive) => (onActive ? isActive : isPending)}
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
