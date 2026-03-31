import React, { useState } from "react";
import baseUrl from "../../api/baseUrl";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
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
  } = useQuery(["orders", user?.email], () =>
    fetch(`${baseUrl}/order/${user.email}`, {
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
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-blue-700">
              My Manufacturing Orders
            </h2>
            <p className="text-gray-500 mt-1 font-light">
              Track payments, shipping, and order status in real-time.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              {myOrders?.length || 0}
            </div>
            <span className="font-bold text-gray-700 uppercase text-xs tracking-widest">
              Active Orders
            </span>
          </div>
        </div>

        {/* Table Wrapper */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full custom-dashboard-table">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="bg-transparent text-gray-400 font-black uppercase text-[10px] tracking-widest py-6 pl-10 border-b border-gray-50">
                    Sl
                  </th>
                  <th className="bg-transparent text-gray-400 font-black uppercase text-[10px] tracking-widest py-6 border-b border-gray-50">
                    Product Description
                  </th>
                  <th className="bg-transparent text-gray-400 font-black uppercase text-[10px] tracking-widest py-6 border-b border-gray-50 text-center">
                    Unit Price
                  </th>
                  <th className="bg-transparent text-gray-400 font-black uppercase text-[10px] tracking-widest py-6 pr-10 border-b border-gray-50 text-right">
                    Actions / Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {myOrders.map((a, index) => (
                  <MyOrderRow
                    a={a}
                    index={index}
                    key={a._id}
                    setDeletingOrder={setDeletingOrder}
                  />
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {myOrders?.length === 0 && (
              <div className="p-20 text-center">
                <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center mx-auto mb-6 text-gray-400 text-3xl">
                  📦
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No manufacturing orders yet
                </h3>
                <p className="text-gray-500 font-light mb-8 max-w-xs mx-auto">
                  Start exploring our inventory and place your first order to
                  see it here!
                </p>
              </div>
            )}
          </div>
        </div>

        {deletingOrder && (
          <DeletingOrdersModal
            refetch={refetch}
            deletingOrder={deletingOrder}
            setDeletingOrder={setDeletingOrder}
          />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
