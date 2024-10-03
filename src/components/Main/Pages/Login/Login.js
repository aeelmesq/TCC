import logo from "../../../../img/logo512.png";
import "../../../../StyleComponents/LoginPage.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Login({ renderScreen }) {
  return (
    <main id="LoginPage">
      <header id="leftBar">
        <div id="backBtn">
          <Link to="../ALT/">
            <i className="bi bi-caret-left-fill"></i>
            Voltar
          </Link>
        </div>
        <div id="LogoMarca">
          <img src={logo} alt="logo" width="80px" />
          <h1>ALT</h1>
        </div>
      </header>
      <section id="mainSection">
        <div id="mainBlock">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
