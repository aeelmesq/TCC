import { createBrowserRouter } from "react-router-dom";
import Home from "../Main/Pages/Home/Home.js";
import ForYou from "../Main/Pages/ForYou/ForYou.js";
import App from "../../App.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "ALT/",
        element: <Home />,
      },
      {
        path: "/forYou",
        element: <ForYou />,
      },
    ],
  },
]);

export default router;
