import "../../StyleComponenst/Header.css";
import DbButton from "./DbButton.js";
import Menu from "./Menu.js";

function Header() {
  return (
    <header>
      <div id="left">
        <img src="../../../public/img/logo512.png" alt="Logo" width="60px" />
        <h1>ALT</h1>
      </div>
      <div id="right">
        <Menu />
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
