import logo from "../../../img/logo512.png";
import "../../../StyleComponents/LoginPage.css";
import SingIn from "./SingIn/SingIn";
import Register from "./Register/Register";

export default function Login({ renderScreen }) {
  function RenderForm() {
    switch (renderScreen) {
      case "SingIn":
        return (
          <>
            <SingIn />
          </>
        );
      case "Register":
        return (
          <>
            <Register />
          </>
        );
      default:
        return (
          <>
            <p>404 not found</p>
          </>
        );
    }
  }

  return (
    <main id="LoginPage">
      <header id="leftBar">
        <div id="backBtn">
          <a href="?menu=Home&page=1">
            <i className="bi bi-caret-left-fill"></i>
            Voltar
          </a>
        </div>
        <div id="LogoMarca">
          <img src={logo} alt="logo" width="80px" />
          <h1>ALT</h1>
        </div>
      </header>
      <section id="mainSection">
        <div id="mainBlock">
          <RenderForm />
        </div>
      </section>
    </main>
  );
}
