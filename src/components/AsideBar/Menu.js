import { NavLink } from "react-router-dom";

export function MenuItem({ path, onActive, onPending, ...components }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isActive ? onActive : isPending ? onPending : ""
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
