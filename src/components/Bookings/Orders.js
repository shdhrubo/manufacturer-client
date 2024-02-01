import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Orders = () => {
  const { id } = useParams();
  const [part, setPart] = useState([]);
  useEffect(() => {
    fetch(`https://manufacturer-xvzb.onrender.com/service/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPart(data);
      });
  }, []);
  const [user] = useAuthState(auth);
  const handleOrders = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    if (quantity < part.minimum || quantity > part.available) {
      return toast.error("Invalid input for quantity");
    }
    const order = {
      user: user.email,
      userName: user.displayName,
      phone: event.target.phone.value,
      address: event.target.address.value,
      name: part.name,
      quantity: quantity,
      cost: quantity * part.price,
    };
    fetch("https://manufacturer-xvzb.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(`Order placed successfully!`);
        event.target.reset();
      });
  };
  return (
    <div>
      <h4 className="text-3xl text-blue-700 font-bold">
        Place Your Booking For: {part.name}
      </h4>
      <img className="mx-auto w-52 mt-3" src={part.img} alt="" />
      <form
        onSubmit={handleOrders}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
        <input
          type="text"
          name="name"
          disabled
          value={user?.displayName}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user?.email}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value="Submit"
          className="btn bg-blue-700 w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default Orders;
