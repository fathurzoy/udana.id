import React from "react";
import BlogNews from "../../components/BlogNews/BlogNews";
import Campaign from "../../components/Campaign/Campaign";
import Footer from "../../components/Footer/Footer";
import HowItWork from "../../components/HowItWork/HowItWork";
import Slideshow from "../../components/Slideshow/Slideshow";

const Homepage = () => {
  return (
    <div>
      <Slideshow />
      <HowItWork />
      <Campaign />
      <BlogNews />
      <Footer />
    </div>
  );
};

export default Homepage;
