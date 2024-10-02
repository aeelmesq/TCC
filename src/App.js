import "./style.css";
import Header from "./components/Header/Header.js";
import SearchBar from "./components/Header/SearchBar/SearchBar.js";
import FooterTemplate from "./components/Footer/footerTemplate.js";
import RenderPage from "./components/Pages/RenderPage.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getUlrParam } from "./components/utilits.js";
import Home from "./components/Pages/Home/Home.js";
import ForYou from "./components/Pages/ForYou/ForYou.js";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/forYou',
    element: <ForYou />,
  }
])

// Importação Grid
import { Grid, GridItem } from '@chakra-ui/react'


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
}

function App() {
  return (
    <>
      <RouterProvider router={router}>
    </>
  );
}

export default App;
