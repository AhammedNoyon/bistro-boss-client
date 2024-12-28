import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";

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
    ],
  },
]);
export default router;
