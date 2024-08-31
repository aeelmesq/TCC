import getUlrParam from "../../Functions/getUrlParam";
import pages from "../../consts/Pages";
import Home from "./Home/Home";
import "../../StyleComponents/Pages.css";

function getPageSelect(str) {
  let pageSelect = pages.filter((page) => page.menu === (str ? str : "Home"));

  return pageSelect[0];
}

function RenderPage() {
  let menuSelect = getUlrParam("menu"),
    pageSelect = getPageSelect(menuSelect);

  function Render() {
    //Chamada da página com base na Url
    switch (pageSelect.title) {
      case "Home":
        return <Home />;
      case "Para você":
        return <p>Trabalhando nisso</p>;
      case "Preferências":
        return <p>Trabalhando nisso</p>;
      case "Penápolis":
        return <p>Trabalhando nisso</p>;
      case "Região":
        return <p>Trabalhando nisso</p>;
      case "Brasil":
        return <p>Trabalhando nisso</p>;
      default:
        return <p>404 Not found</p>;
    }
  }

  return (
    <main className="container">
      <h1 id="title">{pageSelect.title.toUpperCase()}</h1>
      <Render />
    </main>
  );
}

export default RenderPage;
