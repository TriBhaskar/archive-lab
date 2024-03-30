import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky z-50 pt-2 pb-1">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src="" className="mr-3 h-14 w-24" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="login"
              className="text-gray-800 hover:bg-custom-color-10 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="register"
              className="text-white bg-orange-700 hover:bg-custom-color-5 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-14 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-custom-color-5" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-custom-color-5 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-custom-color-5" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-custom-color-5 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"services"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-custom-color-5" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-custom-color-5 lg:p-0`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"blog"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-custom-color-5" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-custom-color-5 lg:p-0`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"pricing"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-custom-color-5" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-custom-color-5 lg:p-0`
                  }
                >
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
