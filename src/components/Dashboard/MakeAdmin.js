import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("https://manufacturer-xvzb.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl text-blue-700">All Users: {users.length}</h2>
      <div class="overflow-x-auto ">
        <table class="table w-full  p-0">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <UserRow
                key={user._id}
                i={i}
                user={user}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
