import { faSignOut, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.jpg";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const logout = () => {
    signOut(auth);
    localStorage.clear();
  };

  // Modern NavLink approach: applies custom styles when active
  const baseLinkStyle =
    "relative font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2";
  const activeStyle = "text-blue-600";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Reviews", path: "/reviews" },
    { name: "Blog", path: "/blog" },
    { name: "Sells", path: "/sells" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand - Exact Original Layout */}
          <div>
            <Link to="/">
              <span className="text-blue-700 font-bold text-md tracking-normal">
                SOLVER
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `${baseLinkStyle} ${isActive ? activeStyle : ""} group`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}

            {/* Auth / Dashboard Desktop */}
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="font-semibold text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 text-blue-700 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span>Sign Out</span>
                    <FontAwesomeIcon icon={faSignOut} />
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Dashboard Sidebar Toggle (Only active on dashboard layout depending on URL/DaisyUI setup) */}
            {location.pathname.includes("/dashboard") && (
              <label
                htmlFor="dashboard-sidebar"
                className="p-2 text-gray-600 hover:text-blue-600 bg-gray-50 rounded-lg cursor-pointer transition-colors"
                aria-label="Toggle Dashboard Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              </label>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <FontAwesomeIcon
                icon={isMobileOpen ? faTimes : faBars}
                className="text-xl"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Wrapper */}
      <div
        className={`lg:hidden shadow-2xl absolute top-20 left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 origin-top overflow-hidden ${isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl font-bold transition-colors ${isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="h-px bg-gray-100 my-2"></div>

          {/* Auth Mobile */}
          {user ? (
            <div className="flex flex-col gap-2">
              <Link
                to="/dashboard"
                className="px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faSignOut} />
                <span>Sign Out</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="mt-2 flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/20"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
