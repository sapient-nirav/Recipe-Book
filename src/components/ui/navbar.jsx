import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { useTheme } from "../../context/ThemeContext";

const Navbar = (props) => {
  const { isLoggedIn, setLoggedIn } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

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

  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="App mb-[92px]">
      <nav
        className={`flex justify-between items-center text-xl border-gray-200 bg-${
          isDarkMode ? "white" : "black"
        } shadow-lg p-4 fixed w-full top-0 z-50`}
      >
        <Link to="/" className="ml-5">
          <img src={logo} alt="logo" className="w-14 rounded-full" />
        </Link>
        <div className={`p-4 bg-${isDarkMode ? "white" : "black"}`}>
          <ul
            className={`flex flex-row font-medium rounded-lg  bg-${
              isDarkMode ? "white" : "black"
            }`}
          >
            <li>
              <Link
                to="/"
                className={`block mx-5 py-2 md:p-0 md:hover:text-blue-700 text-${
                  isDarkMode ? "black" : "white"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/listings"
                className={`block py-2 mx-5 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-${
                  isDarkMode ? "black" : "white"
                }`}
              >
                Listings API
              </Link>
            </li>
            <li>
              <Link
                to="/listings-local"
                className={`block py-2 mx-5 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-${
                  isDarkMode ? "black" : "white"
                }`}
              >
                Listing Local
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link
                  to="/add-recipe"
                  className={`block py-2 mx-5 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-${
                    isDarkMode ? "black" : "white"
                  }`}
                >
                  +Add New Recipe
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="relative">
          <button
            className={`p-2 rounded-full ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            } transition-all transform hover:rotate-180 duration-500 ease-in-out`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          <button
            className={`rounded-md mx-2 px-4 py-2 text-${
              isDarkMode ? "black" : "white"
            } `}
            onClick={toggleDropdown}
          >
            <FaCog />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 mr-4 bg-white border rounded-md shadow-lg">
              {isLoggedIn ? (
                <Link
                  to="/listings-local"
                  className={`block px-4 py-2 text-gray-900  font-medium hover:rounded-lg`}
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              ) : (
                <>
                  <Link
                    to="/register"
                    className={`block px-4 py-2 text-gray-900  hover:bg-gray-300 font-medium hover:rounded-lg`}
                    onClick={closeDropdown}
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className={`block px-4 py-2 text-gray-900 hover:bg-gray-500 hover:font-medium hover:rounded-lg`}
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
