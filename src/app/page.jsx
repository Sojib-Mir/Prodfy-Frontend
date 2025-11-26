import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import RecentProduct from "@/components/RecentProduct";
import Testimonials from "@/components/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col items-center justify-center bg-[#1D232A] font-sans">
      <Banner />
      <RecentProduct />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
