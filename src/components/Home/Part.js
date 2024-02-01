import React from "react";
import { Link } from "react-router-dom";

const Part = ({ part }) => {
  const { name, img, description, minimum, available, price, _id } = part;
  return (
    <div class="card card-compact w-full bg-base-100 border py-4 ">
      <figure>
        <img className="w-52 h-40" src={img} alt="" />
      </figure>
      <div class="card-body text-left">
        <h2 class="card-title">{name}</h2>
        {/* <p>{description}</p> */}
        <p>Minimum Order: {minimum}</p>
        <p>Available: {available}</p>
        <p>Price: $ {price}</p>
        <div class="card-actions justify-center">
          <Link to={`/orders/${_id}`}>
            {" "}
            <button class="btn btn-sm  bg-blue-700">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Part;
