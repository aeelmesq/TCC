import "../../StyleComponents/Header.css";
import DbButton from "./DbButton.js";
import logo from "../../logo.svg";
import { useState, useRef, useEffect, useCallback } from "react";
import useUser from "../../hooks/useUser.js";

function Header() {
  const [windonwScrollY, setWindonwScrollY] = useState(0);

  const [windonwScrollYTpr, setWindonwScrollYTpr] = useState(0);

  const [menuState, setMenuState] = useState(null);

  const { user } = useUser();

  const Btn = useRef(null);

  const addEventScroll = useCallback(() => {
    let handleEventScroll = () => {
      setWindonwScrollYTpr(windonwScrollY);
      setWindonwScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleEventScroll);
  }, [windonwScrollY]);

  useEffect(() => addEventScroll, [addEventScroll]);

  useEffect(() => {
    if (menuState) {
      const menu = document.getElementById("navBar");

      function hiddenM() {
        setMenuState(false);
        Btn.current.classList.remove("pressBtn");
        menu.removeEventListener("mouseleave", hiddenM);
      }

      menu.addEventListener("mouseleave", hiddenM);
    }
  }, [menuState]);

  return (
    <header
      id="webHeader"
      className={
        windonwScrollY > 0
          ? windonwScrollY < windonwScrollYTpr
            ? "FixedHeader"
            : "upSideHeader"
          : "none"
      }
    >
      <section id="left">
        <img src={logo} alt="Logo" width="60px" />
      </section>
      <section id="right">
        {
          //botão de abrir o menu
        }
        <button
          className="hanbBtn"
          type="button"
          ref={Btn}
          onClick={(e) => {
            e.preventDefault();
            Btn.current.classList.add("pressBtn");
            setMenuState(true);
          }}
        >
          <i className="bi bi-list"></i>
        </button>
        <div
          id="navBar"
          className={menuState ? "slideToLeft" : "slideReverse hiddenM"}
        >
          {
            //botão de fechar o menu
          }
          <button
            className="xBtn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              Btn.current.classList.remove("pressBtn");
              setMenuState(false);
            }}
          >
            X
          </button>

          {user.id ? (
            <div>{user.Name}</div>
          ) : (
            <DbButton
              link1={"./loginscreen/singin"}
              output1={"Sing In"}
              link2={"./loginscreen/register"}
              output2={"Reister"}
            />
          )}
        </div>
      </section>
    </header>
  );
}

export default Header;
