import React from "react";
import baseUrl from "../../api/baseUrl";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserShield } from "@fortawesome/free-solid-svg-icons";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch(`${baseUrl}/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json()),
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div className="text-left">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-1 flex items-center gap-2">
              <FontAwesomeIcon icon={faUserShield} className="text-xs" />
              Permissions Management
            </h2>
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
              Administrative Control
            </h3>
            <p className="text-gray-500 mt-2 font-light text-sm">
              Elevate manufacturing partners to administrative status or manage
              account access.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
              {users?.length || 0}
            </div>
            <span className="font-bold text-gray-700 uppercase text-[10px] tracking-widest">
              Global Users
            </span>
          </div>
        </div>

        {/* User Table Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full custom-dashboard-table">
              <thead>
                <tr className="bg-gray-50/50 uppercase text-[10px] tracking-[0.2em] text-gray-500">
                  <th className="bg-transparent py-6 pl-10">#</th>
                  <th className="bg-transparent py-6">
                    Partner Identity & Email
                  </th>
                  <th className="bg-transparent py-6 pr-10 text-right">
                    Access Level / Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {users.map((user, i) => (
                  <UserRow key={user._id} i={i} user={user} refetch={refetch} />
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {users?.length === 0 && (
              <div className="p-24 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-4xl text-gray-200"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No users detected
                </h3>
                <p className="text-gray-500 font-light max-w-xs mx-auto">
                  It appears there are no registered accounts in your system.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
