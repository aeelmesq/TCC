import { memo, useContext } from "react";
import menu from "../../Contexts/menuContext";
import { NavLink } from "react-router-dom";

function MenuItem({ path, onActive, pos, onPending, ...components }) {
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

export default memo(MenuItem);
