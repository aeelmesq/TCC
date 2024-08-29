import "../StyleComponenst/Header.css";
import DbButton from "./DbButton.js";
import MenuItem from "./Menu.js";

function Header() {
  const menuSelect = () => {
    let url = new URL(window.location.href),
      menu = url.searchParams.get("menu"),
      menuItens = document.querySelectorAll(".MenuItem a"),
      pages = [
        "Home",
        "ParaVoce",
        "Preferencias",
        "Penapolis",
        "Regiao",
        "Brasil",
      ];

    console.log(menu);

    for (let i = 0; i < pages.length; i++) {
      if (menu === pages[i] || !menu) {
        menuItens[i].classList.add("on");
        i = pages.length - 1;
      }
    }
  };

  return (
    <header onLoad={menuSelect}>
      <div id="left">
        <img src="logo512.png" alt="Logo" width="60px" />
        <h1>ALT</h1>
      </div>
      <div id="right">
        <ul className="menu">
          <MenuItem link={"?menu=Home"} output={"Home"} />
          <MenuItem link={"?menu=ParaVoce"} output={"Para você"} />
          <MenuItem link={"?menu=Preferencias"} output={"Preferências"} />
          <MenuItem link={"?menu=Penapolis"} output={"Penápolis"} />
          <MenuItem link={"?menu=Regiao"} output={"Região"} />
          <MenuItem link={"?menu=Brasil"} output={"Brasil"} />
        </ul>
        <DbButton
          link1={"?menu=SingIn"}
          output1={"Sing In"}
          link2={"?menu=Register"}
          output2={"Reister"}
        />
      </div>
    </header>
  );
}

export default Header;
