import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import DeletingOrdersModal from "./DeletingOrdersModal";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deletingOrder, setDeletingOrder] = useState(null);

  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch(`https://manufacturer-xvzb.onrender.com/order/${user.email}`, {
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
      <h4 className="text-2xl font-bold text-blue-700">
        My Orders: {myOrders.length}
      </h4>
      <div class="overflow-x-auto ">
        <table class="table w-full ">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((a, index) => (
              <MyOrderRow
                a={a}
                index={index}
                key={a._id}
                setDeletingOrder={setDeletingOrder}
              ></MyOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeletingOrdersModal
          refetch={refetch}
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
        ></DeletingOrdersModal>
      )}
    </div>
  );
};

export default MyOrders;
