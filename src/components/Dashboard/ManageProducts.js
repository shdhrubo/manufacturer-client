import React, { useState } from "react";
import baseUrl from "../../api/baseUrl";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const ManageProducts = () => {
  const [deletingProducts, setDeletingProducts] = useState(null);

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch(`${baseUrl}/services`, {
      method: "GET",
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
              <FontAwesomeIcon icon={faShieldHalved} className="text-xs" />
              Administrative Tools
            </h2>
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
              Inventory Management
            </h3>
            <p className="text-gray-500 mt-2 font-light text-sm">
              Review, update, or remove manufacturing components from the public
              catalog.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
              {services?.length || 0}
            </div>
            <span className="font-bold text-gray-700 uppercase text-[10px] tracking-widest">
              Active SKUs
            </span>
          </div>
        </div>

        {/* Inventory Table Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full custom-dashboard-table">
              <thead>
                <tr className="bg-gray-50/50 uppercase text-[10px] tracking-[0.2em] text-gray-500">
                  <th className="bg-transparent py-6 pl-10">Index</th>
                  <th className="bg-transparent py-6">
                    Component Name & Details
                  </th>
                  <th className="bg-transparent py-6 pr-10 text-right">
                    Settings
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 italic">
                {services.map((service, i) => (
                  <ProductRow
                    key={service._id}
                    i={i}
                    service={service}
                    setDeletingProducts={setDeletingProducts}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>

            {/* Empty State */}
            {services?.length === 0 && (
              <div className="p-24 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon
                    icon={faBoxOpen}
                    className="text-4xl text-gray-200"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 font-light max-w-xs mx-auto">
                  The manufacturing catalog is currently empty.
                </p>
              </div>
            )}
          </div>
        </div>

        {deletingProducts && (
          <DeleteConfirmModal
            deletingProducts={deletingProducts}
            refetch={refetch}
            setDeletingProducts={setDeletingProducts}
          />
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
