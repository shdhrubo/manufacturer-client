import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2GMbGJrhHWZjbh8mOIyMt6GnbvkCHpts265d0Mr76ARYESA533DKiaVBmB7zbjOeYvuZtg1InFLBUr75LyEV9k00fmRI26a5"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://manufacturer-xvzb.onrender.com/orders/${id}`;

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mx-auto">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order.userName}</p>
          <h2 class="card-title">
            Please Pay for : <span className="text-success"> {order.name}</span>{" "}
          </h2>
          <p>
            Your Order Quantity:{" "}
            <span className="text-orange-700">{order.quantity} pieces</span>
          </p>
          <p>
            Please pay: <span className="text-orange-700">${order.cost}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
