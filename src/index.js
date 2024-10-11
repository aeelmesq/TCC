import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//Chakra UI
import { ChakraProvider, color } from '@chakra-ui/react'

//Tema do Chakra UI
import { extendTheme } from "@chakra-ui/react"
//Chama `extendTheme` e passa os valores customizados
const theme = extendTheme({
  colors: {
    blue: {
      100: "#4525d2",
      200: "#331cb2",
      300: "#221293",
      400: "#110973",
      500: "#000053",
      600: "#1a293e"
    },
  },
  components: {
    Text: {
      color: "#000",
    }
  }
})


//import { createBrowserRouter } from "react-router-dom";
//mudar sistema de paginação depois da finalização das páginas principais
const root = ReactDOM.createRoot(document.getElementById("root"));

const queryCient = new QueryClient();

root.render(
  <ChakraProvider theme={theme}>
      <React.StrictMode>
        <QueryClientProvider client={queryCient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
  </ChakraProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
