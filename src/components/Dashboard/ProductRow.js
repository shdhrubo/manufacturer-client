import React from "react";

const ProductRow = ({ service, i, refetch, setDeletingProducts }) => {
  const { name } = service;

  return (
    <tr>
      <td>{i + 1}</td>
      <td>{name}</td>
      <td>
        {" "}
        <label
          onClick={() => setDeletingProducts(service)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
