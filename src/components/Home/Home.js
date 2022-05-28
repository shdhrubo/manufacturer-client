import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Parts from "./Parts";
import Reviews from "./Reviews";
import Summary from "./Summary";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Reviews></Reviews>

      <Summary></Summary>
      <WhyUs></WhyUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
