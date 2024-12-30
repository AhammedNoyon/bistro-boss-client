import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <header>
        <nav className="  ">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className={`min-h-[calc(100vh-476px)] mb-12 md:mb-24`}>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
