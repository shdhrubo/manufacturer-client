import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  fetch(`http://localhost:5000/order/${user.email}`)
    .then((res) => res.json())
    .then((data) => setMyOrders(data));
  return (
    <div>
      <h4 className="text-2xl font-bold text-blue-700">
        My Orders: {myOrders.length}
      </h4>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.name}</td>
                <td>$ {a.cost}</td>

                <td>
                  {a.cost && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs bg-blue-700">pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
