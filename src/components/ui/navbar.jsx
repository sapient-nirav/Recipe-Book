import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

const Navbar = (props) => {
  const { isLoggedIn, setLoggedIn } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // console.log("dropdownOpen: ", dropdownOpen);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log("isLoggedIn: ", isLoggedIn)

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setLoggedIn(false);
    closeDropdown();
  };

  useEffect(() => {
    if (isLoggedIn) {
      setDropdownOpen(false);
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <nav className="flex justify-between items-center text-xl border-gray-200 bg-gray-50 shadow-lg">
        <Link to="/" className="ml-5">
          <img src={logo} alt="logo" className="w-14" />
        </Link>
        <div className="p-4">
          <ul className="flex flex-row font-medium rounded-lg bg-gray-50">
            <li>
              <Link
                to="/"
                className="block mx-5 py-2 md:p-0 md:hover:text-blue-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/listings"
                className="block py-2 mx-5 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Listings API
              </Link>
            </li>
            <li>
              <Link
                to="/listings-local"
                className="block py-2 mx-5 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Listing Local
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link
                  to="/add-recipe"
                  className="block py-2 mx-5 md:p-0 text-gray-900 rounded hover:text-blue-700"
                >
                  +Add New Recipe
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="relative">
          <button
            className="rounded-md mx-5 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
            onClick={toggleDropdown}
          >
            <FaCog />
          </button>
          {dropdownOpen && (
            <div className="absolute  right-0 mt-3 mr-4 bg-white border rounded-md shadow-lg">
              {isLoggedIn ? (
                <Link
                  to="/listings-local"
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-700 hover:text-white font-medium hover:rounded-lg"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-500 hover:text-white font-medium hover:rounded-lg"
                    onClick={closeDropdown}
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-700 hover:text-white font-medium hover:rounded-lg"
                    onClick={toggleDropdown}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
