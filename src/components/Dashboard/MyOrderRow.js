import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrashCan, faCheckCircle, faHashtag } from "@fortawesome/free-solid-svg-icons";

const MyOrderRow = ({ a, index, setDeletingOrder }) => {
  return (
    <tr className="hover:bg-blue-50/30 transition-colors group">
      <td className="py-6 pl-10">
        <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
          {index + 1}
        </span>
      </td>
      <td className="py-6">
        <div className="flex flex-col">
          <span className="text-gray-900 font-bold text-base">{a.name}</span>
          <span className="text-gray-400 text-xs font-medium uppercase tracking-tight mt-0.5">Order ID: {a._id.slice(-8)}</span>
        </div>
      </td>
      <td className="py-6 text-center">
        <span className="text-gray-900 font-black tracking-tight">$ {a.cost}</span>
      </td>
      <td className="py-6 pr-10 text-right">
        <div className="flex items-center justify-end gap-3">
          {a.cost && !a.paid && (
            <>
              <label
                onClick={() => setDeletingOrder(a)}
                htmlFor="delete-confirm-modal"
                className="btn btn-sm rounded-xl bg-red-50 border-none text-red-600 hover:bg-red-600 hover:text-white transition-all capitalize px-4"
              >
                <FontAwesomeIcon icon={faTrashCan} className="mr-2 text-[10px]" />
                Cancel
              </label>
              <Link to={`/dashboard/payment/${a._id}`}>
                <button className="btn btn-sm rounded-xl bg-blue-600 border-none text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 capitalize px-6 italic">
                  <FontAwesomeIcon icon={faCreditCard} className="mr-2 text-[10px]" />
                  Pay Now
                </button>
              </Link>
            </>
          )}
          {a.paid && (
            <div className="flex flex-col items-end">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100">
                <FontAwesomeIcon icon={faCheckCircle} />
                Payment Received
              </span>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] bg-gray-50 px-2 py-0.5 rounded text-gray-400 font-mono">
                <FontAwesomeIcon icon={faHashtag} />
                {a.transactionId}
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default MyOrderRow;
