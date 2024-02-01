import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [deletingProducts, setDeletingProducts] = useState(null);

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery("services", () =>
    fetch("https://manufacturer-xvzb.onrender.com/services", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl text-blue-700">
        All Products: {services.length}
      </h2>
      <div class="overflow-x-auto ">
        <table class="table w-full  p-0">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Parts</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, i) => (
              <ProductRow
                key={service._id}
                i={i}
                service={service}
                setDeletingProducts={setDeletingProducts}
                refetch={refetch}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProducts && (
        <DeleteConfirmModal
          deletingProducts={deletingProducts}
          refetch={refetch}
          setDeletingProducts={setDeletingProducts}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;
