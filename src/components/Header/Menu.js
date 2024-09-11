import pages from "../../consts/Pages.js";
import { getUlrParam } from "../utilits.js";
import { useRef } from "react";

const select = getUlrParam("menu") ? getUlrParam("menu") : "Home";

function MenuItem({ link, output, index }) {
  return (
    <li className="MenuItem">
      <a
        href={"?menu=" + link}
        key={index}
        className={link === select ? "on" : "of"}
      >
        {output}
      </a>
    </li>
  );
}

function Menu() {
  const menu = useRef(null);

  function MenuAction(e) {
    if (e.checked) {
      menu.current.style.visibility = "visible";
      e.classList.remove("bi-list");
      e.classList.add("bi-x-lg");
      return;
    }
    menu.current.style.visibility = "hidden";
    e.classList.remove("bi-x-lg");
    e.classList.add("bi-list");
  }

  let menuItens = pages.map((page, index) => {
    return <MenuItem link={page.menu} output={page.title} index={index} />;
  });
  return (
    <>
      <label htmlFor="menuBtn" className="hanbBtn">
        <i class="bi bi-list"></i>
      </label>
      <input
        type="checkbox"
        name="menuBtn"
        id="menuBtn"
        className="hidden"
        onChange={(e) => MenuAction(e)}
      />
      <ul className="menu" ref={menu}>
        {menuItens}
      </ul>
    </>
  );
}

export default Menu;
