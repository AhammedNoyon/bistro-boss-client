import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const loginRegisterPath =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <>
      <header>
        <nav className="  ">{loginRegisterPath || <Navbar></Navbar>}</nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>{loginRegisterPath || <Footer></Footer>}</footer>
    </>
  );
};

export default MainLayout;
