import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="dashboard">
      <div class="drawer drawer-mobile ">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <h1 className="text-2xl text-blue-700 font-bold">Dashboard</h1>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <li>
            <Link to={"/dashboard"}>My Appoinments</Link>
          </li> */}
            <li>
              <Link to={"/dashboard/myprofile"}>My Profile</Link>
            </li>
            {!admin && (
              <>
                <li>
                  <Link to={"/dashboard/myorders"}>My Orders</Link>
                </li>
                <li>
                  <Link to={"/dashboard/addreview"}>Add Review</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to={"/dashboard/makeadmin"}>Make Admin</Link>
                </li>
                <li>
                  <Link to={"/dashboard/addproducts"}>Add Products</Link>
                </li>
                <li>
                  <Link to={"/dashboard/manageproducts"}>Manage Products</Link>
                </li>
                <li>
                  <Link to={"/dashboard/manageorders"}>Manage Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
