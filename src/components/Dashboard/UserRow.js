import React from "react";
import baseUrl from "../../api/baseUrl";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUserShield,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const UserRow = ({ user, refetch, i }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`${baseUrl}/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  return (
    <tr className="hover:bg-gray-50/80 transition-colors group">
      <td className="py-6 pl-10 font-bold text-gray-400">{i + 1}</td>
      <td className="py-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-gray-900 font-bold text-[15px] group-hover:text-blue-700 transition-colors tracking-tight">
              {email}
            </span>
            <span className="text-gray-400 text-[10px] uppercase tracking-[0.1em] font-black mt-0.5">
              Role:{" "}
              {role === "admin" ? "Administrator" : "Manufacturing Partner"}
            </span>
          </div>
        </div>
      </td>
      <td className="py-6 pr-10 text-right">
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-sm rounded-xl bg-blue-600 border-none text-white hover:bg-blue-700 shadow-md shadow-blue-500/10 px-5 h-10 uppercase tracking-widest text-[9px] font-black transition-all active:scale-95"
          >
            <FontAwesomeIcon icon={faUserShield} className="mr-2" />
            Make Admin
          </button>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-600 text-[10px] font-black border border-emerald-100 uppercase tracking-widest">
            <FontAwesomeIcon icon={faCheckCircle} />
            Privileged
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
