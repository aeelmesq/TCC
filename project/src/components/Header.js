import "../StyleComponenst/Header.css";
import DbButton from "./DbButton.js";
import MenuItem from "./Menu.js";

function Header() {
  return (
    <header>
      <div id="left">
        <img src="logo512.png" alt="Logo" width="60px" />
        <h1>ALT</h1>
      </div>
      <div id="right">
        <ul className="menu">
          <MenuItem link={"?menu=home"} output={"Home"} />
          <MenuItem link={"?menu=ParaVoce"} output={"Para você"} />
          <MenuItem link={"?menu=Preferencias"} output={"Preferências"} />
          <MenuItem link={"?menu=Penapolis"} output={"Penápolis"} />
          <MenuItem link={"?menu=Regiao"} output={"Região"} />
        </ul>
        <DbButton
          link1={"SingIn"}
          output1={"Sing In"}
          link2={"Register"}
          output2={"Reister"}
        />
      </div>
    </header>
  );
}

export default Header;
