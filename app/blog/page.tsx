import React from "react";
import Hero from "./(components)/Hero";
import NavBar from "../(components)/NavBar";
import BlogData from "./(components)/BlogData";
import Footer from "../(components)/Footer";

import NewsBlogData from "./(components)/NewsBlogData";
import BiznezlkCTA from "./(components)/BiznezlkCTA";
import SellerCTA from "./(components)/SellerCTA";

const BlogPage = () => {
  return (
    <div className=" px-10">
      <NavBar />
      <Hero />
      <BlogData />
      <BiznezlkCTA />
      <NewsBlogData />
      <SellerCTA />
      <NewsBlogData />
      <Footer />
    </div>
  );
};

export default BlogPage;
