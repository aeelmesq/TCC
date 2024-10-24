import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//Chakra UI
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react"

// Defina o tema personalizado
const config = defineConfig({
  theme: {
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
  }
});
const system = createSystem(config)

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();