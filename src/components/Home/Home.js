import React from "react";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import NewsLetter from "./NewsLetter";
import OurServices from "./OurServices";
import Partners from "./Partners";
import Parts from "./Parts";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Teams from "./Teams";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Partners></Partners>
      <OurServices></OurServices>
      <Reviews></Reviews>
      <Summary></Summary>
      <WhyUs></WhyUs>
      <Teams></Teams>
      <ContactUs></ContactUs>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
