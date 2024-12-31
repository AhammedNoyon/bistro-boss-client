import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";

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
        path: "ourShop",
        element: <OurShop></OurShop>,
      },
    ],
  },
]);
export default router;
