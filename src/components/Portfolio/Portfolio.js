import React from "react";
import mybg from "../../images/my-bg.png";
const Portfolio = () => {
  return (
    <div className="mx-10">
      <div class="card w-full bg-base-100 shadow-xl mx-auto h-auto">
        <figure class="px-10 pt-10 w-52 mx-auto">
          <img className="w-52" src={mybg} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body text-left">
          <h2 class="card-title">Name : Shoriful Habib</h2>
          <p>Email : shorifulhabib.iit@gmail.com</p>
          <p>Education : IIT,Noakhali Science and Technology Uiversity</p>
          <p>
            {" "}
            My Site Links:{" "}
            <ul className="text-blue-700">
              <li>
                {" "}
                <span>1. </span>
                <a href="https://inventory-management-b4678.web.app/">
                  {" "}
                  EIMS{" "}
                </a>{" "}
              </li>
              <li>
                <span>2. </span>{" "}
                <a href="https://tino-by-shd.netlify.app/">Tino </a>{" "}
              </li>
              <li>
                <span>3. </span>
                <a href="https://money-master-shd1.netlify.app/">
                  Money Mster{" "}
                </a>{" "}
              </li>
            </ul>
          </p>
          <p>List of technologies I know:</p>
          <ul>
            <li>1. HTML</li>
            <li>2. CSS</li>
            <li>3. BOOTSTRAP</li>
            <li>4. TAILWIND</li>
            <li>5. JAVASCRIPT</li>
            <li>6. REACT</li>
            <li>7. NODE.JS</li>
            <li>8. MONGODB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
