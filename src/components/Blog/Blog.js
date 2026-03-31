import React from "react";
import reactcore from "../../images/react-core.png";
import question from "../../images/reactquestion.jpeg";
import jsx from "../../images/jsx.png";
import NewsLetter from "../Home/NewsLetter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
  const blogs = [
    {
      title: "React Core Concepts",
      desc: "React is a Javascript library. In this blog we will learn about react core concepts and its fundamentals...",
      img: reactcore,
      link: "https://medium.com/@shorifulhabib.iit/react-js-core-concepts-44e1c276a46c",
      badge: "NEW"
    },
    {
      title: "5 React JS Questions",
      desc: "5 most common react js interview questions that every developer must know before appearing for an interview...",
      img: question,
      link: "https://medium.com/@shorifulhabib.iit/5-react-js-interview-question-c95c34fa774c",
      badge: null
    },
    {
      title: "Event Handler In JSX",
      desc: "How to bind methods or event handlers in JSX callbacks to securely manage your component's state and interactions...",
      img: jsx,
      link: "#",
      badge: null
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Knowledge Base</h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">
            Our Latest Blogs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore industry insights, technical guides, and the latest trends from our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <a 
              key={index} 
              href={blog.link} 
              target={blog.link !== "#" ? "_blank" : "_self"} 
              rel={blog.link !== "#" ? "noopener noreferrer" : ""}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-56 w-full relative overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0" 
                />
                {blog.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {blog.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8 flex-grow flex flex-col text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light mb-auto">
                  {blog.desc}
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-bold group-hover:text-blue-800 transition-colors duration-300">
                  Read Article
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
};

export default Blog;
