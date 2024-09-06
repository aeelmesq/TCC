import logo from "../../../img/logo512.png";
import "../../../StyleComponents/LoginPage.css";
import SingIn from "./SingIn/SingIn";

export default function Login(renderScreen) {
  function RenderForm() {
    return (
      <>
        <SingIn />
      </>
    );
  }

  return (
    <main id="LoginPage">
      <header id="leftBar">
        <div>
          <a href="?menu=Home&page=1">
            <i class="bi bi-caret-left-fill"></i>
            Voltar
          </a>
        </div>
        <div id="LogoMarca">
          <img src={logo} alt="logo" width="80px" />
          <h1>ALT</h1>
        </div>
      </header>
      <section id="mainSection">
        <div>
          <RenderForm />
        </div>
      </section>
    </main>
  );
}
