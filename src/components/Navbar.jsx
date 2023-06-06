import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="words"
              className="flex-shrink-0 text-white font-bold text-lg"
            >
              Runninghill
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleDropdown}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.293 6.293a1 1 0 0 0-1.414 0L12 10.586 6.121 4.707a1 1 0 1 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`hidden md:block ${isOpen ? "block" : "hidden"}`}>
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="sentences"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                style={({ isActive }) =>
                  isActive ? { backgroundColor: "gray" } : {}
                }
              >
                Sentences
              </NavLink>
              <NavLink
                to="words"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                style={({ isActive }) =>
                  isActive ? { backgroundColor: "gray" } : {}
                }
              >
                Words
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      <div
        data-testid="dropdown"
        className={`${isOpen ? "block" : "hidden"} md:hidden `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            data-testid="dropdown-sentences"
            to="sentences"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "gray" } : {}
            }
            onClick={toggleDropdown}
          >
            Sentences
          </NavLink>
          <NavLink
            data-testid="dropdown-words"
            to="words"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "gray" } : {}
            }
            onClick={toggleDropdown}
          >
            Words
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
