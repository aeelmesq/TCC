import "./style.css";

import { ChakraProvider } from "@chakra-ui/react";
// Importação Grid

//import RenderPage from "./components/Pages/RenderPage.js";
import { Outlet } from "react-router-dom";

import UserProvider from "./Providers/userProvider.js";

function App() {
  return (
    <>
      <ChakraProvider
        resetCSS={false}
        theme={{
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <UserProvider>
          <Outlet />
        </UserProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
