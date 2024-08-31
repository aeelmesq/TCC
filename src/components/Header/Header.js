import "../../StyleComponenst/Header.css";
import DbButton from "./DbButton.js";
import Menu from "./Menu.js";

function Header() {
  return (
    <header id="webHeader">
      <section id="left">
        <img src="../../../public/img/logo512.png" alt="Logo" width="60px" />
        <h1>ALT</h1>
      </section>
      <section id="right">
        <Menu />
        <DbButton
          link1={"?menu=SingIn"}
          output1={"Sing In"}
          link2={"?menu=Register"}
          output2={"Reister"}
        />
      </section>
    </header>
  );
}

export default Header;
