import React from "react";
import baseUrl from "../../api/baseUrl";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faStar,
  faArrowRight,
  faClock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import useAdmin from "../../hooks/useAdmin";

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  // Fetch orders count
  const { data: orders, isLoading: ordersLoading } = useQuery(
    ["orders", user?.email],
    () =>
      user?.email
        ? fetch(`${baseUrl}/order/${user?.email}`, {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }).then((res) => res.json())
        : Promise.resolve([]),
  );

  if (ordersLoading) return <Loading />;

  const stats = admin
    ? [
        {
          label: "Admin View",
          value: "Catalog",
          icon: faCartShopping,
          color: "from-blue-500 to-indigo-600",
          link: "/dashboard/manageproducts",
          action: "Manage Parts",
        },
        {
          label: "Expand Catalog",
          value: "Update",
          icon: faPlus,
          color: "from-cyan-400 to-blue-500",
          link: "/dashboard/addproducts",
          action: "Add New Part",
        },
        {
          label: "Admin Status",
          value: "Verified",
          icon: faUser,
          color: "from-indigo-500 to-purple-600",
          link: "/dashboard/makeadmin",
          action: "System Access",
        },
      ]
    : [
        {
          label: "Total Orders",
          value: orders?.length || 0,
          icon: faCartShopping,
          color: "from-blue-500 to-indigo-600",
          link: "/dashboard/myorders",
          action: "View Orders",
        },
        {
          label: "Profile Status",
          value: "Complete",
          icon: faUser,
          color: "from-cyan-400 to-blue-500",
          link: "/dashboard/myprofile",
          action: "Update Info",
        },
        {
          label: "Reviews Given",
          value: "Manage",
          icon: faStar,
          color: "from-indigo-500 to-purple-600",
          link: "/dashboard/addreview",
          action: "Add Review",
        },
      ];

  return (
    <div className="p-4 md:p-10 bg-gray-50/50 min-h-screen">
      {/* Welcome Banner - Aligned with Banner.js theme */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-2xl p-10 md:p-14 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden mb-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="text-left">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 backdrop-blur-md text-blue-200 text-xs font-semibold tracking-widest uppercase mb-4">
                {admin ? "Administrator Desk" : "Partner Dashboard"}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Welcome,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {user?.displayName?.split(" ")[0] || "Member"}
                </span>
              </h2>
              <p className="text-blue-100/80 text-lg font-light max-w-xl">
                Track your active manufacturing orders and manage your profile
                details in one secure portal.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="w-28 h-28 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-inner group">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-4xl text-white/20 group-hover:text-blue-400 transition-colors duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Aligned with Cards style */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-left"
          >
            <div className="flex items-start justify-between mb-8">
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl shadow-md transform group-hover:-translate-y-1 transition-transform`}
              >
                <FontAwesomeIcon icon={stat.icon} />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                  {stat.label}
                </p>
                <p className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  {stat.value}
                </p>
              </div>
            </div>

            <Link
              to={stat.link}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gray-50 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all group/btn text-sm"
            >
              {stat.action}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs transform group-hover/btn:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
