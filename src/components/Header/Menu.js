import pages from "../../consts/Pages.js";
import { getUlrParam } from "../utilits.js";
import { useRef } from "react";

const select = getUlrParam("menu") ? getUlrParam("menu") : "Home";

function MenuItem({ link, output, index }) {
  return (
    <>
      <li className="MenuItem">
        <a
          href={"?menu=" + link}
          key={index}
          className={link === select ? "on" : "of"}
        >
          {output}
        </a>
      </li>
    </>
  );
}

function Menu() {
  const menu = useRef(null);
  const btn = useRef(null);

  function MenuAction(target) {
    if (target) {
      menu.current.classList.remove("hiddenM");
      btn.current.classList.remove("bi-list");
      btn.current.classList.add("bi-x-lg");
      btn.current.classList.add("xRight");
      return;
    }
    menu.current.classList.add("hiddenM");
    btn.current.classList.remove("bi-x-lg");
    btn.current.classList.add("bi-list");
    btn.current.classList.remove("xRight");
  }

  let menuItens = pages.map((page, index) => {
    return <MenuItem link={page.menu} output={page.title} index={index} />;
  });
  return (
    <>
      <label htmlFor="menuBtn" className="hanbBtn">
        <i class="bi bi-list" ref={btn}></i>
      </label>
      <input
        type="checkbox"
        name="menuBtn"
        id="menuBtn"
        className="hidden"
        onChange={(e) => MenuAction(e.target.checked)}
      />
      <ul className="menu hiddenM" ref={menu}>
        {menuItens}
      </ul>
    </>
  );
}

export default Menu;
