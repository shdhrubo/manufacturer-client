import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, i, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://manufacturer-xvzb.onrender.com/user/admin/${email}`, {
      method: "PUT",
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
    <tr>
      <td>{i + 1}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn bg-blue-700 btn-xs">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
