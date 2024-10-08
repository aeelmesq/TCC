import "./style.css";

// Importação Grid

//import RenderPage from "./components/Pages/RenderPage.js";
import { Outlet } from "react-router-dom";

import UserProvider from "./Providers/userProvider.js";

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
      <UserProvider>
        <Outlet />
        {/* Placeholder das páginas */}
      </UserProvider>
    </>
  );
}

export default App;
