import React from "react";
import { toast } from "react-toastify";

const DeletingOrdersModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
  const { name, _id } = deletingOrder;
  const handleDelete = () => {
    fetch(`https://manufacturer-xvzb.onrender.com/order/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`${name} is deleted.`);
          setDeletingOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {name} ?
          </h3>

          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingOrdersModal;
