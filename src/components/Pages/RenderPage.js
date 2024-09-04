import { getUlrParam } from "../utilits.js";
import pages from "../../consts/Pages";
import Home from "./Home/Home";
import "../../StyleComponents/Pages.css";
import ForYou from "./ForYou/ForYou.js";

function getPageSelect(str) {
  let pageSelect = pages.filter((page) => page.menu === (str ? str : 'Home'));

  return pageSelect[0];
}

function RenderPage() {
  let menuSelect = getUlrParam('menu'),
    pageSelect = getPageSelect(menuSelect);

  function Render() {
    //Chamada da página com base na Url
    switch (pageSelect.title) {
      case 'Home':
        return <Home />;
      case "Para você":
        return <ForYou />;
      case "Preferências":
        return <p>Trabalhando nisso</p>;
      case 'Penápolis':
        return <p>Trabalhando nisso</p>;
      case 'Região':
        return <p>Trabalhando nisso</p>;
      case 'Brasil':
        return <p>Trabalhando nisso</p>;
      default:
        return <p>404 Not found</p>;
    }
  }

  return (
    <main className="container">
      <Render />
    </main>
  );
}

export default RenderPage;
