import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.clear();
  };
  const menuItems = (
    <>
      <li>
        <Link to={"/home"}>Home</Link>
      </li>

      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/portfolio"}>Portfolio</Link>
      </li>
      <li>
        {user ? (
          <>
            <Link to={"/dashboard"}>Dashboard</Link>
            <p className="text-blue-700">{user?.displayName} </p>
            <button className="btn btn-ghost" onClick={logout}>
              Signout <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>{" "}
            </button>
          </>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 sticky top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to={"/"}
          class="btn btn-ghost normal-case text-xl text-blue-700 font-bold"
        >
          SOLVER
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 font-bold">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          for="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
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
        </label>
      </div>
    </div>
  );
};

export default Header;
