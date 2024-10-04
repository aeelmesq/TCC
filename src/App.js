import "./style.css";

// Importação Grid

//import RenderPage from "./components/Pages/RenderPage.js";
import { Outlet } from "react-router-dom";

import useUser from "./hooks/useUser.js";

import Container from "./components/Others/Container/DefaultBlock.js";
import { useEffect } from "react";

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
  const user = useUser();

  useEffect(() => console.log(user), [user]);

  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
