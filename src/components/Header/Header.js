// import "../../StyleComponents/Header.css";
// import DbButton from "./DbButton.js";
// import Menu from "./Menu.js";
// import { useState, useRef, useEffect  } from "react";
import logo from "../../logo.svg";

function Header() {
  // const [windonwScrollY, setWindonwScrollY] = useState(0);

  // const [windonwScrollYTpr, setWindonwScrollYTpr] = useState(0);

  // const [menuState, setMenuState] = useState(null);

  // const Btn = useRef(null);

  // window.addEventListener("scroll", () => {
  //   setWindonwScrollYTpr(windonwScrollY);
  //   setWindonwScrollY(window.scrollY);
  // });

  // useEffect(() => {
  //   if (menuState) {
  //     const menu = document.getElementById("navBar");

  //     function hiddenM() {
  //       setMenuState(false);
  //       Btn.current.classList.remove("pressBtn");
  //       menu.removeEventListener("mouseleave", hiddenM);
  //     }

  //     menu.addEventListener("mouseleave", hiddenM);
  //     return;
  //   }
  // }, [menuState]);

  return (
    <header>
      <section>
        <img src={logo} alt="Logo" width="60px" />
      </section>
    </header>
  );
}

export default Header;
