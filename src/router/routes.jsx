import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h3>Create error page</h3>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "ourShop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
