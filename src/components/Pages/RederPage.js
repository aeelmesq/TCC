import getUlrParam from "../../Functions/getUrlParam";
import pages from "../../consts/Pages";
import Home from "./Home/Home";
import "../../StyleComponenst/Pages.css";

function getPageNow(str) {
  let pageNow = pages.filter((page) => page.menu === (str ? str : "Home"));

  return pageNow[0];
}

function RederPage() {
  let menuSelect = getUlrParam("menu"),
    pageNow = getPageNow(menuSelect);

  function Reder() {
    switch (pageNow.title) {
      case "Home":
        return <Home />;
      default:
        return <p>404 Not found</p>;
    }
  }

  return (
    <main className="container">
      <h1 id="title">{pageNow.title.toUpperCase()}</h1>
      <Reder />
    </main>
  );
}

export default RederPage;
