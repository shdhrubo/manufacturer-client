import React from "react";
// import "./Blog.css";
import reactcore from "../../images/react-core.png";
import question from "../../images/reactquestion.jpeg";
import jsx from "../../images/jsx.png";
import NewsLetter from "../Home/NewsLetter";

const Blog = () => {
  return (
    <div>
      <h2 className="text-2xl text-blue-700 font-bold mb-10">Our Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 mb-10">
        <div class="card w-full bg-blue-50 shadow-xl">
          <a
            href="https://medium.com/@shorifulhabib.iit/react-js-core-concepts-44e1c276a46c"
            target="_blank"
          >
            <figure>
              <img src={reactcore} alt="react core" className="w-full" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                React Core Concepts
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p className="text-left">
                React is a Javascript library.In this blog we will learn about
                react core concepts...
              </p>
            </div>
          </a>
        </div>
        <div class="card w-full bg-blue-50 shadow-xl">
          <a
            href="https://medium.com/@shorifulhabib.iit/5-react-js-interview-question-c95c34fa774c"
            target="_blank"
          >
            <figure>
              <img src={question} alt="question" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">5 React JS Questions</h2>
              <p className="text-left">
                5 most common react js interview questions...
              </p>
            </div>
          </a>
        </div>
        <div class="card w-full bg-blue-50 shadow-xl">
          <figure>
            <img src={jsx} alt="Shoes" className="w-full" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Event Handeler In JSX</h2>
            <p className="text-left">
              How to bind methods or event handlers in JSX callbacks...
            </p>
          </div>
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Blog;
