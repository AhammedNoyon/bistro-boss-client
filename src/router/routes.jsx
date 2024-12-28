import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h3>Create error page</h3>,
    // children:[
    //   {
    //     path: "",
    //     element:
    //   }
    // ]
  },
]);
export default router;
