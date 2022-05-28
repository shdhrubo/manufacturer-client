import React from "react";
// import "./Blog.css";

const Blog = () => {
  return (
    <div className="text-left">
      <div class="crd p-12">
        <div class="card-header text-center text-3xl pb-8 text-blue-700">
          Qustion Answer
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h3>
              1. How will you improve the performance of a React Application?
            </h3>
            <p>
              <strong>Answer :</strong>
              JavInternally, React uses several clever techniques to minimize
              the number of costly DOM operations required to update the UI. For
              many applications, using React will lead to a fast user interface
              without doing much work to specifically optimize for performance.
              Nevertheless, there are several ways you can speed up your React
              application.aScript
              <br /> 1. Keeping component state local where necessary.
              <br /> 2. Memoizing React components to prevent unnecessary
              re-renders.
              <br /> 3. Code-splitting in React using dynamic import()
              <br /> 4. Windowing or list virtualization in React.
              <br /> 5. Lazy loading images in React.
            </p>
          </li>
          <br />
          <li class="list-group-item">
            <h3>
              2. What are the different ways to manage a state in a React
              application?
            </h3>
            <p>
              <strong>Answer :</strong>
              There are four main types of state you need to properly manage in
              your React apps:
              <br />
              1 Local state. <br />2 Global state.
              <br />
              3 Server state.
              <br /> 4 URL state.
            </p>
          </li>
          <br />
          <li class="list-group-item">
            <h3>3. How does prototypical inheritance work?</h3>
            <p>
              <strong>Answer :</strong>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object. Every object
              with its methods and properties contains an internal and hidden
              property known as [[Prototype]]. The Prototypal Inheritance is a
              feature in javascript used to add methods and properties in
              objects. It is a method by which an object can inherit the
              properties and methods of another object. Traditionally, in order
              to get and set the [[Prototype]] of an object, we use
              Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in
              modern language, it is being set using _proto_.
              <br /> br If you update it directly, calling the setState()
              afterward may just replace the update you made. When you directly
              update the state, it does not change this.state immediately.
              Instead, it creates a pending state transition, and accessing it
              after calling this method will only return the present value. You
              will lose control of the state across all components.
            </p>
          </li>
          <br />
          <li class="list-group-item">
            <h3>4. What is a unit test?</h3>
            <p>
              <strong>Answer :</strong> Unit testing is a type of testing in
              which individual units or functions of software testing. Its
              primary purpose is to test each unit or function. A unit is the
              smallest testable part of an application. It mainly has one or a
              few inputs and produces a single output.
            </p>
          </li>
          <br />
          <li class="list-group-item">
            <h3>5. Why should write unit tests?</h3>
            <p>
              <strong>Answer :</strong> Unit testing ensures that all code meets
              quality standards before it's deployed. This ensures a reliable
              engineering environment where quality is paramount. Over the
              course of the product development life cycle, unit testing saves
              time and money, and helps developers write better code, more
              efficiently
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
