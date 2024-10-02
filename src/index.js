import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//Chakra UI
import { ChakraProvider } from '@chakra-ui/react'

//import { createBrowserRouter } from "react-router-dom";
//mudar sistema de paginação depois da finalização das páginas principais
const root = ReactDOM.createRoot(document.getElementById("root"));

const queryCient = new QueryClient();

root.render(
  <ChakraProvider>
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
