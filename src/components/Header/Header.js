import "../StyleComponenst/Header.css";
import DbButton from "./DbButton.js";
import MenuItem from "./Menu.js";
import pages from "../../consts/Pages.js";

function Header() {
  return (
    <header>
      <div id="left">
        <img src="./img/logo512.png" alt="Logo" width="60px" />
        <h1>ALT</h1>
      </div>
      <div id="right">
        <ul className="menu">
          {pages.map((itens, index) => {
            return (
              <MenuItem link={itens.menu} output={itens.name} index={index} />
            );
          })}
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
