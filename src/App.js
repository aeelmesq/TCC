import "./style.css";
import Header from "./components/Header/Header.js";
import SearchBar from "./components/Header/SearchBar/SearchBar.js";
import FooterTemplate from "./components/Footer/footerTemplate.js";

// Importação Grid
import { Grid, GridItem } from "@chakra-ui/react";

//import RenderPage from "./components/Pages/RenderPage.js";
import router from "./components/paths/router.js";
import { Link, RouterProvider } from "react-router-dom";

import Container from "./components/Others/Container/DefaultBlock.js";

/*function FullPage() {
  const page = getUlrParam("page");

  switch (page) {
    case "1":
      return (
        <>
          <Header />
          <SearchBar />
          <RenderPage />
          <div>
            <FooterTemplate />
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
            <FooterTemplate />
          </div>
        </>
      );
  }
}*/

function App() {
  return (
    <>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
