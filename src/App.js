import "./style.css";
import Header from "./components/Header/Header.js";
import SearchBar from "./components/Header/SearchBar/SearchBar.js";
import Footer from "./components/Footer/Footer.js";
import RenderPage from "./components/Pages/RenderPage.js";
import { getUlrParam } from "./components/utilits.js";

function FullPage() {
  const page = getUlrParam("page");

  switch (page) {
    case "1":
      return (
        <>
          <Header />
          <SearchBar />
          <RenderPage />
          <div>
            <Footer />
          </div>
        </>
      );
    case "2":
      return (
        <>
          <RenderPage />
        </>
      );
    default:
      return (
        <>
          <Header />
          <SearchBar />
          <RenderPage />
          <div>
            <Footer />
          </div>
        </>
      );
  }
}

function App() {
  return (
    <>
      <FullPage />
    </>
  );
}

export default App;
