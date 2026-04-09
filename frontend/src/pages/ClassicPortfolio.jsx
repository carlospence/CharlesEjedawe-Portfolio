import React from "react";
import { portfolioData } from "../data/portfolio.js";
import ClassicNavigation from "../components/Classic/Navigation.jsx";
import Hero from "../components/Classic/Hero.jsx";
import Skills from "../components/Classic/Skills.jsx";
import Projects from "../components/Classic/Projects.jsx";
import Experience from "../components/Classic/Experience.jsx";
import Contact from "../components/Classic/Contact.jsx";
import Footer from "../components/Classic/Footer.jsx";

export default function ClassicPortfolio() {
  return (
    <div className="bg-white">
      <ClassicNavigation />
      <div className="pt-16">
        <Hero data={portfolioData.hero} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Experience data={portfolioData.experience} />
        <Contact data={portfolioData.contact} />
      </div>
      <Footer data={portfolioData.hero} />
    </div>
  );
}
