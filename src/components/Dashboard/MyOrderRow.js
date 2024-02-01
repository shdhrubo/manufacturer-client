import React from "react";
import { Link } from "react-router-dom";

const MyOrderRow = ({ a, index, setDeletingOrder, refetch }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{a.name}</td>
      <td>$ {a.cost}</td>
      <td>
        {a.cost && !a.paid && (
          <>
            <label
              onClick={() => setDeletingOrder(a)}
              for="delete-confirm-modal"
              class="btn btn-xs btn-error mr-1"
            >
              Delete
            </label>
            <Link to={`/dashboard/payment/${a._id}`}>
              <button className="btn btn-xs bg-blue-700">pay</button>
            </Link>
          </>
        )}
        {a.paid && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              Transaction id: <p className="text-success">{a.transactionId}</p>
            </p>
          </div>
        )}
      </td>
     
    </tr>
  );
};

export default MyOrderRow;
