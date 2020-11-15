import React from "react";
import "../../App.css";
import HeroSection from "../../components/HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
