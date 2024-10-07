import { createBrowserRouter } from "react-router-dom";
import Home from "../Main/Pages/Home/Home.js";
import ForYou from "../Main/Pages/ForYou/ForYou.js";
import Login from "../Main/Pages/Login/Login.js";
import SingIn from "../Main/Pages/Login/SingIn/SingIn.js";
import Register from "../Main/Pages/Login/Register/Register.js";
import Main from "../Main/index.js";
import ErrorPage from "../Main/Pages/ErrorPage.js/ErrorPage.js";
import App from "../../App.js";

const ComingSoon = () => <p>ComingSoon</p>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "ALT/",
            element: <Home />,
          },
          {
            path: "/forYou",
            element: <ForYou />,
          },
          {
            path: "/preferencias",
            element: <ComingSoon />,
          },
          {
            path: "/penapolis",
            element: <ComingSoon />,
          },
          {
            path: "/regiao",
            element: <ComingSoon />,
          },
          {
            path: "/brasil",
            element: <ComingSoon />,
          },
          {
            path: "/user",
            element: <ComingSoon />,
          },
        ],
      },
      {
        path: "/loginscreen",
        element: <Login />,
        children: [
          {
            path: "singin/",
            element: <SingIn />,
          },
          {
            path: "register/",
            element: <Register />,
          },
        ],
      },
    ],
  },
]);

export default router;
