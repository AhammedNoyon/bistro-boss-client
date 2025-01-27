import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="/ourMenu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/ourShop">Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-base-100 w-[96%] md:w-4/5 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="">
          <div className="md:ml-5">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-1">
              Bistro Boss
            </h3>
            <p className="uppercase md:text-xl font-bold">Restaurant</p>
          </div>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex mr-8">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <Link to="/login" className="">
          Login
        </Link>
        <div className="dropdown dropdown-end hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
