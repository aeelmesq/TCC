import { createBrowserRouter } from "react-router-dom";
import Home from "../Main/Pages/Home/Home.js";
import ForYou from "../Main/Pages/ForYou/ForYou.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/forYou",
    element: <ForYou />,
  },
]);

export default router;
