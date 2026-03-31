import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faBox, faHashtag } from "@fortawesome/free-solid-svg-icons";

const ProductRow = ({ service, i, setDeletingProducts }) => {
  const { name, _id, img } = service;
  return (
    <tr className="hover:bg-gray-50/80 transition-colors group">
      <td className="py-6 pl-10 font-bold text-gray-400">
        {i + 1}
      </td>
      <td className="py-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 p-1 flex-shrink-0 overflow-hidden">
            {img ? (
              <img src={img} alt={name} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-100 rounded-lg">
                 <FontAwesomeIcon icon={faBox} />
              </div>
            )}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-gray-900 font-bold text-base group-hover:text-blue-700 transition-colors uppercase tracking-tight">{name}</span>
            <span className="text-gray-400 text-[10px] font-mono flex items-center gap-1 mt-0.5">
              <FontAwesomeIcon icon={faHashtag} className="opacity-40" />
              {_id.slice(-12)}
            </span>
          </div>
        </div>
      </td>
      <td className="py-6 pr-10 text-right">
        <label
          onClick={() => setDeletingProducts(service)}
          htmlFor="delete-confirm-modal"
          className="btn btn-sm w-10 h-10 p-0 rounded-xl bg-red-50 border-none text-red-500 hover:bg-red-600 hover:text-white transition-all shadow-sm"
          title="Delete Product"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
