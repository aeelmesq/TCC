import { getUlrParam } from "../utilits.js";
import Home from "./Home/Home";
import "../../StyleComponents/Pages.css";
import ForYou from "./ForYou/ForYou.js";
import BtnScrollUp from "../BtnScrollUp/BtnScrollUp.js";

function RenderPage() {
  let menuSelect = getUlrParam("menu");

  function Render() {
    //Chamada da página com base na Url
    switch (menuSelect) {
      case "Home":
        return <Home />;
      case "ParaVoce":
        return <ForYou />;
      case "Preferencias":
        return <p>Trabalhando nisso</p>;
      case "Penapolis":
        return <p>Trabalhando nisso</p>;
      case "Regiao":
        return <p>Trabalhando nisso</p>;
      case "Brasil":
        return <p>Trabalhando nisso</p>;
      default:
        return <p>404 Not found</p>;
    }
  }

  return (
    <>
      <main className="container">
        <Render />
      </main>
      <BtnScrollUp />
    </>
  );
}

export default RenderPage;
