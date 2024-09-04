import "../../StyleComponents/Header.css";
import DbButton from "./DbButton.js";
import Menu from "./Menu.js";
import logo from "../../img/logo512.png";

function Header() {
  return (
    <header id="webHeader">
      <section id="left">
        <img src={logo} alt="Logo" width="60px" />
        <h1>ALT</h1>
      </section>
      <section id="right">
        <Menu />
        <DbButton
          link1={"?menu=SingIn&page=2"}
          output1={"Sing In"}
          link2={"?menu=Register&page=2"}
          output2={"Reister"}
        />
      </section>
    </header>
  );
}

export default Header;
