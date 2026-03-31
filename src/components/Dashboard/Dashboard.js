import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUser, 
  faCartShopping, 
  faStar, 
  faUserShield, 
  faPlus, 
  faBoxOpen, 
  faClipboardList,
  faChartPie
} from "@fortawesome/free-solid-svg-icons";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const location = useLocation();

  const navItemClass = ({ isActive }) => 
    `flex items-center gap-4 px-6 py-3.5 rounded-xl font-bold transition-all duration-200 ${
      isActive 
        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
        : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
    }`;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content flex flex-col pt-4 lg:pt-0">
          {/* Dashboard Header Bar (Mobile Only or Breadcrumbs) */}
          <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 mb-4 rounded-b-3xl shadow-sm">
            <h1 className="text-xl font-black text-blue-700">SOLVER DASHBOARD</h1>
          </div>

          <div className="flex-grow">
            <Outlet />
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <div className="w-72 bg-white h-screen border-r border-gray-100 flex flex-col p-6 overflow-hidden">
            
            {/* Branding Sidebar */}
            <div className="mb-10 px-4">
              <Link to="/" className="text-xl font-bold text-blue-700 tracking-tight">
                SOLVER <span className="text-gray-400 font-light text-xs tracking-widest ml-1 uppercase">Portal</span>
              </Link>
            </div>

            <nav className="flex flex-col gap-1.5 overflow-y-auto pr-2 custom-scrollbar">
              <NavLink to="/dashboard" end className={navItemClass}>
                <FontAwesomeIcon icon={faChartPie} className="w-5 text-sm opacity-70" />
                <span>Overview</span>
              </NavLink>

              <NavLink to="/dashboard/myprofile" className={navItemClass}>
                <FontAwesomeIcon icon={faUser} className="w-5 text-sm opacity-70" />
                <span>My Profile</span>
              </NavLink>

              {!admin && (
                <>
                  <NavLink to="/dashboard/myorders" className={navItemClass}>
                    <FontAwesomeIcon icon={faCartShopping} className="w-5 text-sm opacity-70" />
                    <span>My Orders</span>
                  </NavLink>
                  <NavLink to="/dashboard/addreview" className={navItemClass}>
                    <FontAwesomeIcon icon={faStar} className="w-5 text-sm opacity-70" />
                    <span>Add Review</span>
                  </NavLink>
                </>
              )}

              {admin && (
                <>
                  <div className="mt-6 mb-2 px-6">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-50">Admin Tools</span>
                  </div>
                  <NavLink to="/dashboard/makeadmin" className={navItemClass}>
                    <FontAwesomeIcon icon={faUserShield} className="w-5 text-sm opacity-70" />
                    <span>Make Admin</span>
                  </NavLink>
                  <NavLink to="/dashboard/addproducts" className={navItemClass}>
                    <FontAwesomeIcon icon={faPlus} className="w-5 text-sm opacity-70" />
                    <span>Add Products</span>
                  </NavLink>
                  <NavLink to="/dashboard/manageproducts" className={navItemClass}>
                    <FontAwesomeIcon icon={faBoxOpen} className="w-5 text-sm opacity-70" />
                    <span>Manage Products</span>
                  </NavLink>
                </>
              )}
            </nav>

            {/* Profile Mini Logout Link */}
            <div className="mt-auto pt-6 border-t border-gray-100 italic">
               <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50/50">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
                    {user?.displayName?.charAt(0) || "U"}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-gray-900 truncate">{user?.displayName || "User"}</p>
                    <p className="text-[10px] text-gray-500 font-medium truncate uppercase tracking-tighter">{admin ? 'Administrator' : 'Manufacturing Partner'}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
